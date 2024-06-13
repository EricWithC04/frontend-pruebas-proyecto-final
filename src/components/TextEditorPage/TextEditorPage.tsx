import { useRef, useState } from 'react';
import Editor from '@monaco-editor/react'
import { PythonFileType } from '../../data/types';

import './TextEditorPage.css'

const TextEditor = () => {

    const monacoRef = useRef(null)
    const [files, setFiles] = useState<Array<PythonFileType>>([{ name: 'app.py', code: '' }])
    const [currentFile, setCurrentFile] = useState(0)
    const [nameNewFile, setNameNewFile] = useState('')

    function handleEditorChange(value: any, event: any) {
        console.log("this is the current value:", value);
        const fileWithChanges = files.map((file, index) => index === currentFile ? { ...file, code: value } : file)
        setFiles(fileWithChanges)
    }

    function handleEditorDidMount(editor: any, monaco: any) {

    }

    function handleEditorWillMount(monaco: any) {
        console.log('beforeMount: the monaco instance:', monaco);
    }

    function handleEditorValidation(markers: any) {
        // model markers
        // markers.forEach(marker => console.log('onValidate:', marker.message));
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

    function handleExecuteCode() {
        fetch('http://localhost:3000/execute', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code: files[currentFile].code
            })
        })
    }

    const handleLintCode = () => {
        fetch('http://localhost:3000/lint-python', {
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

    function handleDownload(nameFile: string, contentFile: string) {
        const element = document.createElement("a")
        const file = new Blob([contentFile], { type: 'text/plain' })
        element.href = URL.createObjectURL(file)
        element.download = nameFile
        document.body.appendChild(element)
        element.click()
        document.body.removeChild(element)
    }

    return (
        <div className='main-bg editor-page'>
            <div className='files-list-container'>
                <ul className='files-list'>
                    {
                        files.map((file, index) => {
                            return (
                                <li key={index} className='items-files'>
                                    <p onClick={() => setCurrentFile(index)}>{file.name}</p>
                                    <p onClick={() => handleDeleteFile(file.name)}>x</p>
                                </li>
                            )
                        })
                    }
                </ul>
                <input type="text" className='w-100' placeholder='Name...' value={nameNewFile} onChange={(e) => setNameNewFile(e.target.value)} />
                <button onClick={handleCreateNewFile}>New File</button>
            </div>
            <div>
                <Editor
                    height="90vh"
                    width="90vw"
                    defaultLanguage='python'
                    theme='vs-dark'
                    onMount={handleEditorDidMount}
                    beforeMount={handleEditorWillMount}
                    onValidate={handleEditorValidation}
                    onChange={handleEditorChange}
                    value={files[currentFile].code}
                />
                <button onClick={() => handleDownload(files[currentFile].name, files[currentFile].code)}>Export Code</button>
                <button onClick={handleExecuteCode}>Execute</button>
                <button onClick={handleLintCode}>Lint Code</button>
            </div>
        </div>
    )
}

export default TextEditor