import { useEffect } from 'react'
import styles from './EvaluationPage.module.css'
import { useParams } from 'react-router-dom'
import EvaluationForm from '../EvaluationForm/EvaluationForm'

const EvaluationPage = () => {

    const { idEvaluation } = useParams()

    if (typeof idEvaluation !== 'string') {
        throw new Error('idEvaluation is required')
    }

    useEffect(() => {
        
    }, [])

    return (
        <div className={`${styles['evaluation-page']}`}>
            <EvaluationForm
                idEvaluation={parseInt(idEvaluation)}
            />
        </div>
    )
}

export default EvaluationPage