import { ThemeProgressData } from '../../types'
import { useNavigate } from 'react-router-dom'
import styles from './UnitCard.module.css'

type UnitCardProps = {
    idUnit: number
    icon: string
    title: string
    description: string
    completeThemes: Array<ThemeProgressData>
    setExpandedThemes: (expandedThemes: any ) => void
    setSelectedUnit: () => void
}

const UnitCard = ({idUnit, icon, title, description, completeThemes, setExpandedThemes, setSelectedUnit}: UnitCardProps) => {

    const navigate = useNavigate()

    const handleCompleteUnit = () => {
        const themesIndexes = [
            [0, 1, 2, 3, 4, 5, 6, 7],
            [8, 9, 10, 11, 12],
            [13, 14, 15, 16, 17, 18],
            [19, 20, 21, 22, 23, 24],
        ]

        const completedThemesOfUnit = themesIndexes[idUnit-1].every(themeIndex => completeThemes[themeIndex].theme_progress.complete)

        if (completedThemesOfUnit) {
            navigate(`/evaluation/${idUnit + 30}`)
        } else {
            alert('Faltan temas por completar')
        }
    }

    return (
        <div className={styles['unit-card']}>
            <div className={styles['unit-card-icon']}>
                <img src={icon} alt="icon" />
            </div>
            <div className={styles['unit-card-content']}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <div className={styles['unit-card-buttons-container']}>
                <button onClick={() => {setSelectedUnit(); setExpandedThemes((prev: boolean) => !prev)}}>Ver tema</button>
                <button onClick={handleCompleteUnit}>Completar Unidad</button>
            </div>
        </div>
    )
}

export default UnitCard