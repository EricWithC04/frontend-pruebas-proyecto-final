import { useState } from "react";
import { PythonFileType } from "../../../data/types";

export const useTextEditor = () => {
    const [files, setFiles] = useState<Array<PythonFileType>>([{ name: 'app.py', code: '' }])
    const [currentFile, setCurrentFile] = useState(0)
    const [nameNewFile, setNameNewFile] = useState('')

    const handleEditorChange = (value: any, event: any) => {
        const fileWithChanges = files.map((file, index) => index === currentFile ? { ...file, code: value } : file)
        setFiles(fileWithChanges)
    }

    const handleCreateNewFile = () => {
        const exists = files.some(file => file.name === nameNewFile)
        if (exists) alert("No pueden haber 2 archivos con el mismo nombre!")
        else if (nameNewFile.length > 0) {
            setFiles([...files, { name: nameNewFile, code: '' }])
            setNameNewFile('')
        }
    }

    const handleDeleteFile = (name: string) => {
        if (files[currentFile].name === name) alert("No puedes eliminar el archivo en el que estás parado!")
        else {
            const newFiles = files.filter(file => file.name !== name)
            setCurrentFile(0)
            setFiles(newFiles)
        }
    }

    const handleExecuteCode = () => {
        fetch('http://localhost:3000/execute/fastapi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code: files[currentFile].code
            })
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    const handleLintCode = () => {
        fetch('http://localhost:3000/lint-fastapi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code: files[currentFile].code
            })
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
    }

    const handleDownload = (nameFile: string, contentFile: string) => {
        const element = document.createElement("a")
        const file = new Blob([contentFile], { type: 'text/plain' })
        element.href = URL.createObjectURL(file)
        element.download = nameFile
        document.body.appendChild(element)
        element.click()
        document.body.removeChild(element)
    }

    return {
        files,
        setFiles,
        currentFile,
        setCurrentFile,
        nameNewFile,
        setNameNewFile,
        handleEditorChange,
        handleCreateNewFile,
        handleDeleteFile,
        handleExecuteCode,
        handleLintCode,
        handleDownload
    }
}