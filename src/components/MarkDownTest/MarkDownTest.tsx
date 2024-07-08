import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import ExerciseList from '../ExerciseList/ExerciseList'
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import './MarkDownTest.css'

import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python'

SyntaxHighlighter.registerLanguage('python', python)

const MarkDownTest = () => {

    const { idMarkdown } = useParams()
    const navigate = useNavigate()

    if (!idMarkdown) {
        throw new Error('idMarkdown is required')
    }

    const [themeData, setThemeData] = useState<any>(null)

    useEffect(() => {
        fetch(`http://localhost:3001/theme/${idMarkdown}`)
            .then(res => res.json())
            .then(data => setThemeData(data))
            .catch(err => console.error(err))
    }, [])

    const handleCompleteTheme = () => {
        fetch(`http://localhost:3001/theme_progress/1/${idMarkdown}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ complete: true })
        })
            .then(_res => navigate(`/evaluation/${idMarkdown}`))
            .catch(err => console.error(err))
    }

    return (
        <div className='container-markdown w-100 justified-text'>
            <ReactMarkdown
                className="w-60"
                remarkPlugins={[remarkGfm]}
                components={{
                    a: ({ href, ...props }) => (
                        <a href={href} target="_blank" rel="noopener noreferrer" {...props}></a>
                    ),
                    code({ node, className, children, ...rest }: any) {
                        const match = /language-python/.exec(className || '');
                        return match ? (
                            <SyntaxHighlighter
                                style={dark}
                                language="python"
                                PreTag="div"
                                children={String(children).replace(/\n$/, '')}
                                {...rest}
                            >
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                        ) : (
                            <code className={className} {...rest}>
                                {children}
                            </code>
                        );
                    },
                }}
            >
                {themeData ? themeData.description : `Loading...`}
            </ReactMarkdown>
            <ExerciseList
                idMarkdown={parseInt(idMarkdown)}
            />
            <button onClick={handleCompleteTheme}>Completar tema</button>
        </div>
    )
}

export default MarkDownTest