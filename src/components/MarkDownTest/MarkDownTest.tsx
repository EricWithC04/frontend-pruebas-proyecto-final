import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import ExerciseList from '../ExerciseList/ExerciseList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './MarkDownTest.css'

const MarkDownTest = () => {

    const { idMarkdown } = useParams()

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

    return (
        <div className='container-markdown w-100 justified-text'>
            <ReactMarkdown 
                className="w-60" 
                remarkPlugins={[remarkGfm]}
                components={{
                    a: ({ href, ...props }) => (
                        <a href={href} target="_blank" rel="noopener noreferrer" {...props}></a>
                    )
                }}
            >
                {themeData ? themeData.description : `Loading...`}
            </ReactMarkdown>
            <ExerciseList 
                idMarkdown={parseInt(idMarkdown)}
            />
        </div>
    )
}

export default MarkDownTest