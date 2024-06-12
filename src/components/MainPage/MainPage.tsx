import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UnitCard from '../UnitCard/UnitCard'
import allThemesPerUnit from '../../data/themesPerUnit'
import exampleUnitsData from '../../data/units'

const MainPage = () => {

    const navigate = useNavigate()

    const [expandedThemes, setExpandedThemes] = useState(false)
    const [unit, setUnit] = useState('python')

    return (
        <>
            <div className="unit-card-container">
                {
                    exampleUnitsData.map((data, index) => (
                        <UnitCard
                            key={index}
                            icon={data.icon}
                            title={data.title}
                            description={data.description}
                            name={data.name}
                            setUnit={setUnit}
                            setExpandedThemes={setExpandedThemes}
                        />
                    ))
                }
            </div>
            <div className='item-button-container'>
                {
                    allThemesPerUnit.hasOwnProperty(unit) ? allThemesPerUnit[unit].map((data: any) => (
                        <div 
                            className={`item-button ${expandedThemes ? 'item-button-active' : 'item-button-hidden'}`} 
                            onClick={() => navigate(`/theme/${data.id}`)}
                        >
                            <p>{data.title}</p>
                        </div>
                    )) : null
                }
            </div>
        </>
    )
}

export default MainPage