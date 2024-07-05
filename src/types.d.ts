export type UnitData = {
    icon: string
    title: string
    description: string,
    name: string
}

export type UserData = {
    id: number
    userName: string
    email: string
}

export type ThemeProgressData = {
    id: number
    theme_progress: {
        complete: boolean
    }
}

export type UnitProgressData = {
    id: number
    unit_progress: {
        complete: boolean
    }
}

export type UserProgressData = {
    id: number
    createdAt: any
    updatedAt: any
    units: Array<UnitProgressData>
    themes: Array<ThemeProgressData>
}

declare module 'react-syntax-highlighter'