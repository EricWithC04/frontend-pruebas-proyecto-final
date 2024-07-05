import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UnitCard from '../UnitCard/UnitCard'
import styles from './MainPage.module.css'
import { ThemeProgressData, UnitProgressData, UserProgressData } from '../../types'

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

    const [userThemesProgressData, setUserThemesProgressData] = useState<Array<ThemeProgressData>>([])

    const [userUnitsProgress, setUserUnitsProgress] = useState<number>(0)
    const [userThemesProgress, setUserThemesProgress] = useState<Array<number>>([0, 0, 0, 0])

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

        fetch('http://localhost:3001/theme_progress/1')
            .then(res => res.json())
            .then(data => setUserThemesProgressData(data))
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

    useEffect(() => {
        if (userThemesProgressData.length) {
            const unitsIndexes = [
                [0, 1, 2, 3, 4, 5, 6, 7],
                [8, 9, 10, 11, 12],
                [13, 14, 15, 16, 17, 18],
                [19, 20, 21, 22, 23, 24],
            ]
            
            let progress = [0, 0, 0, 0]
            unitsIndexes.forEach((unit: number[], indexOfUnit: number) => {
                unit.forEach((indexOfTheme: number) => {
                    if (userThemesProgressData[indexOfTheme].complete) {
                        progress[indexOfUnit] += 100 / unit.length 
                    }
                })
            })
            setUserThemesProgress(progress)
        }
    }, [userThemesProgressData])

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
                    <div className={`${expandedThemes ? styles['progress-container'] : styles['progress-container-hidden']} ${styles['progress-theme-container']}`}>
                        <div className={`${styles['progress-bar']}`} style={{width: `${userThemesProgress[selectedUnit]}%`}}>
                            <h6>{Math.floor(userThemesProgress[selectedUnit])}%</h6>
                        </div>
                    </div>
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