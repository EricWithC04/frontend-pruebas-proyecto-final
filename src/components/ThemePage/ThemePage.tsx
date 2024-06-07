import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import allThemesPerUnit from '../../data/themesPerUnit'

const ThemePage = () => {

    const { idTheme } = useParams()

    const navigate = useNavigate()

    const [details, setDetails] = useState('')

    useEffect(() => {
        Object.keys(allThemesPerUnit).forEach((unit: any) => {
            allThemesPerUnit[unit].forEach((theme: any) => {
                if (theme.id == idTheme) setDetails(theme.title)
            })
        })
    }, [])

    if (details.length) {
        return (
            <div>
                <button onClick={() => navigate(-1)}>Back</button>
                <h1>{details}</h1>
            </div>
        )
    } else {
        return (
            <div>{idTheme}</div>
        )
    }
}

export default ThemePage