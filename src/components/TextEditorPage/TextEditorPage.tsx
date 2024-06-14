import { useEffect } from 'react';
import Editor from '@monaco-editor/react'
import { PythonFileType } from '../../data/types';
import exampleCodeExercises from '../../data/exampleCodeExercise';
import { useTextEditor } from './hook/useTextEditor';

import './TextEditorPage.css'
import { useParams } from 'react-router-dom';

const TextEditor = () => {

    const { idExercise } = useParams()

    if (!idExercise) {
        throw new Error('No se ha proporcionado el id del ejercicio')
    }

    const { 
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
        handleDownload,
        handleLintCode
    } = useTextEditor()
    
    useEffect(() => {
        const browseExercise: string = exampleCodeExercises.find(exercise => exercise.id_exercise === parseInt(idExercise))?.code || ''

        const chargedExercise: PythonFileType = {
            ...files[currentFile],
            code: browseExercise
        }
        setFiles([chargedExercise])
    }, [])

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