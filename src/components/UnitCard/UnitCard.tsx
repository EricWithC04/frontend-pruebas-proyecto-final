import styles from './UnitCard.module.css'

type UnitCardProps = {
    icon: string
    title: string
    description: string
}

const UnitCard = ({icon, title, description}: UnitCardProps) => {
    return (
        <div className={styles['unit-card']}>
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