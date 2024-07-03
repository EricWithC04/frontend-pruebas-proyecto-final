import styles from './UnitCard.module.css'

type UnitCardProps = {
    idUnit: number
    icon: string
    title: string
    description: string
    setExpandedThemes: (expandedThemes: any ) => void
    setSelectedUnit: () => void
}

const UnitCard = ({idUnit, icon, title, description, setExpandedThemes, setSelectedUnit}: UnitCardProps) => {

    const handleCompleteUnit = () => {
        fetch(`http://localhost:3001/unit_progress/1/${idUnit}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({complete: true})
        })
            .then(_res => window.location.reload())
            .catch(err => console.error(err))
        // setExpandedThemes(false)
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