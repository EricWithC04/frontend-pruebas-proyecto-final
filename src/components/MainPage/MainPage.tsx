import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UnitCard from '../UnitCard/UnitCard'

const MainPage = () => {

    const navigate = useNavigate()

    const [expandedThemes, setExpandedThemes] = useState(false)
    const [fetchUnits, setFetchUnits] = useState<Array<any>>([])
    const [selectedUnit, setSelectedUnit] = useState(0)

    useEffect(() => {
        fetch('http://localhost:3001/unit')
            .then(res => res.json())
            .then(data => setFetchUnits(data))
            .catch(err => console.error(err))
    }, [])

    if (fetchUnits.length) {
        return (
            <>
                <div className="unit-card-container">
                    {
                        fetchUnits.map((data: any, index: any) => (
                            <UnitCard
                                key={index}
                                icon={data.icon}
                                title={data.title}
                                description={data.description}
                                setExpandedThemes={setExpandedThemes}
                                setSelectedUnit={() => setSelectedUnit(index)}
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
            </>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
}

export default MainPage