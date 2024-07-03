export type UnitData = {
    icon: string
    title: string
    description: string,
    name: string
}

export type UnitProgressData = {
    id: number
    unit_progress: {
        complete: boolean
    }
}

export type UserProgressData = {
    id: number
    userName: string
    email: string
    progress: {
        id: number
        units: Array<UnitProgressData>
    }
}

declare module 'react-syntax-highlighter'