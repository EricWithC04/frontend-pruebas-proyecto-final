import styles from './UnitCard.module.css'

type UnitCardProps = {
    icon: string
    title: string
    description: string
    setExpandedThemes: (expandedThemes: any ) => void
    setSelectedUnit: () => void
}

const UnitCard = ({icon, title, description, setExpandedThemes, setSelectedUnit}: UnitCardProps) => {
    return (
        <div className={styles['unit-card']} onClick={() => {setSelectedUnit(); setExpandedThemes((prev: boolean) => !prev)}}>
            <div className={styles['unit-card-icon']}>
                <img src={icon} alt="icon" />
            </div>
            <div className={styles['unit-card-content']}>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default UnitCard