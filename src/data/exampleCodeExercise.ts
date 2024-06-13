const exampleCodeExercise = `
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
print(es_entero(5))         

# Coloca un flotante
print(es_flotante(5.0))     

# Coloca una cadena
print(es_cadena("Hola"))    

# Coloca un booleano
print(es_booleano(True))    

# Coloca una lista
print(es_lista([1, 2, 3]))  

# Coloca una tupla
print(es_tupla((1, 2, 3)))  

# Coloca un diccionario
print(es_diccionario({'a': 1, 'b': 2}))  

# Coloca un conjunto
print(es_conjunto({1, 2, 3}))  

# Coloca un rango
print(es_rango(range(5)))  

# Coloca un numero complejo
print(es_complejo(1 + 2j))  
`

export default exampleCodeExercise