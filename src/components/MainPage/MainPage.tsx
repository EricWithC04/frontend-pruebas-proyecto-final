import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UnitCard from '../UnitCard/UnitCard'
import styles from './MainPage.module.css'
import { UnitProgressData, UserProgressData } from '../../types'

const MainPage = () => {

    const navigate = useNavigate()

    const [userData, setUserData] = useState<UserProgressData>({
        id: 0,
        userName: '',
        email: '',
        progress: {
            id: 0,
            units: []
        }
    })
    const [userUnitsProgress, setUserUnitsProgress] = useState<number>(0)

    const [expandedThemes, setExpandedThemes] = useState(false)
    const [fetchUnits, setFetchUnits] = useState<Array<any>>([])
    const [selectedUnit, setSelectedUnit] = useState(0)

    useEffect(() => {
        fetch('http://localhost:3001/unit')
            .then(res => res.json())
            .then(data => setFetchUnits(data))
            .catch(err => console.error(err))

        
        fetch('http://localhost:3001/user/1')
            .then(res => res.json())
            .then(data => setUserData(data))
            .catch(err => console.error(err))
    }, [])

    useEffect(() => {
        if (userData.progress.units.length) {
            let progress = 0
            const valueOfUnits = 100 / userData.progress.units.length            
            userData.progress.units.forEach((unit: UnitProgressData) => {
                if (unit.unit_progress.complete) {
                    progress += valueOfUnits
                }
            })
            setUserUnitsProgress(progress)
        }
    }, [userData])

    if (fetchUnits.length) {
        return (
            <div className={styles['main-container']}>
                <div className="unit-card-container">
                    {
                        fetchUnits.map((data: any) => (
                            <UnitCard
                                key={data.id}
                                idUnit={data.id}
                                icon={data.icon}
                                title={data.title}
                                description={data.description}
                                setExpandedThemes={setExpandedThemes}
                                setSelectedUnit={() => setSelectedUnit(data.id-1)}
                            />
                        ))
                    }
                </div>
                <div className='item-button-container'>
                    {
                        fetchUnits.length ? fetchUnits[selectedUnit].themes.map((data: any) => (
                            <div 
                                className={`item-button ${expandedThemes ? 'item-button-active' : 'item-button-hidden'}`} 
                                onClick={() => {
                                    navigate(`/markdown/${data.id}`)
                                }}
                            >
                                <p>{data.name}</p>
                            </div>
                        )) : null
                    }
                </div>
                <div className={`${styles['progress-container']}`}>
                    <div className={`${styles['progress-bar']} w-${userUnitsProgress}`}>
                        <h6>{userUnitsProgress}%</h6>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
}

export default MainPage