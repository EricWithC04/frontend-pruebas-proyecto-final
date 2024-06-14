export type Exercise = {
    id: number,
    name: string,
    description: string
}

export type CodeExercise = {
    id_exercise: number,
    code: string
}

export type ExerciseItem = {
    id: number,
    name: string,
    description: string,
    extended: boolean
}

export type PythonFileType = {
    name: string,
    code: string
}