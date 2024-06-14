import { CodeExercise } from "./types"

const exampleCodeExercises: Array<CodeExercise> = [
    {
        id_exercise: 1,
        code: `
def es_entero(valor):
    return isinstance(valor, int)

def es_flotante(valor):
    return isinstance(valor, float)

def es_cadena(valor):
    return isinstance(valor, str)

def es_booleano(valor):
    return isinstance(valor, bool)

def es_lista(valor):
    return isinstance(valor, list)

def es_tupla(valor):
    return isinstance(valor, tuple)

def es_diccionario(valor):
    return isinstance(valor, dict)

def es_conjunto(valor):
    return isinstance(valor, set)

def es_rango(valor):
    return isinstance(valor, range)

def es_complejo(valor):
    return isinstance(valor, complex)

# Resolver

# Coloca un entero
print("Change Me")         

# Coloca un flotante
print("Change Me")     

# Coloca una cadena
print("Change Me")    

# Coloca un booleano
print("Change Me")    

# Coloca una lista
print("Change Me")  

# Coloca una tupla
print("Change Me")  

# Coloca un diccionario
print("Change Me")  

# Coloca un conjunto
print("Change Me")  

# Coloca un rango
print("Change Me")  

# Coloca un numero complejo
print("Change Me")  
`
    },
    {
        id_exercise: 2,
        code: `
def exercise_1(valor):
    return valor == {
        'name': 'Alejandro',
        'age': 22,
        'job': 'Engineer'
    }

def exercise_2(valor):
    return valor == [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Resolver

# Coloca un Diccionario con las siguientes propiedades:
# name, que debe ser Alejandro
# age, que debe ser 22
# job, que debe ser Engineer
print(exercise_1("Change Me"))

# Coloca una lista con numeros del 1 al 10
print(exercise_2("Change Me"))
`
    },
    {
        id_exercise: 3,
        code: ''
    }
]

export default exampleCodeExercises