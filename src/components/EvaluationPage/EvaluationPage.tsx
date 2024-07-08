import { useEffect } from 'react'
import styles from './EvaluationPage.module.css'
import { useParams } from 'react-router-dom'
import EvaluationForm from '../EvaluationForm/EvaluationForm'

const EvaluationPage = () => {

    const { idEvaluation } = useParams()

    useEffect(() => {
        console.log(idEvaluation);
    }, [])

    return (
        <div className={`${styles['evaluation-page']}`}>
            <EvaluationForm></EvaluationForm>
        </div>
    )
}

export default EvaluationPage