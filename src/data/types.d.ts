export type Exercise = {
    id: number,
    name: string,
    description: string,
    code: string
}

export type CodeExercise = {
    id_exercise: number,
    code: string
}

export type ExerciseItem = {
    id: number,
    name: string,
    description: string,
    extended: boolean,
    code: string
}

export type PythonFileType = {
    name: string,
    code: string
}