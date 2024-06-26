import pythonInstall1 from '../assets/python_install/install_python_1.jpg';
import pythonInstall2 from '../assets/python_install/install_python_2.jpg';
import pythonInstall3 from '../assets/python_install/install_python_3.jpg';
import pythonInstall4 from '../assets/python_install/install_python_4.jpg';
import pythonInstall5 from '../assets/python_install/install_python_5.jpg';
import pythonInstall6 from '../assets/python_install/install_python_6.jpg';

const exampleMarkDown = `
# ¿Qué es Python? 

Python es un lenguaje de programación potente y fácil de aprender.
Tiene estructuras de datos de alto nivel eficientes y un simple pero efectivo sistema de programación
orientado a objetos. La elegante sintaxis de Python y su tipado dinámico, junto a su naturaleza
interpretada lo convierten en un lenguaje ideal para scripting y desarrollo rápido de aplicaciones en
muchas áreas, para la mayoría de plataformas.

En esta unidad se desarrollarán los conceptos básicos y las funcionalidades del lenguaje de programación Python y su sistema.
Ayuda tener un interprete de Python accesible para una experiencia práctica, 
todos los ejemplos son auto-contenidos, permitiendo utilizar el tutorial sin conexión.

Para poder empezar con python, es necesario instalarlo.
Puede descargarlo desde la [pagina oficial de python](https://www.python.org/downloads).

Para la instalación, siga los siguientes pasos:

### Instalación de Python
- Acceder a la pagina oficial de Python: https://www.python.org/.
![python_install_1](${pythonInstall1})
- Hacer click en downloads, y en menú hacer click en el botón donde dice la última versión de “Python 3.12.2”.
![python_install_2](${pythonInstall2})
- Una vez descargado se deberá hacer doble click en el ejecutable.  
    a. Seleccionar las dos opciones que aparecen debajo:  

        I. La primera es para dar privilegios al ejecutable.  
        II. La segunda es para añadir a las variables de entorno la ruta en donde se instalará Python, 
        el cual nos permitirá poder ejecutarlo desde cualquier parte del sistema operativo.

    b. A continuación, hacer click en la opción de “Install Now”. Aparecerá una ventana que nos preguntara si queremos ejecutarlo y le damos que sí.
![python_install_4](${pythonInstall3})
- Si todo se instaló correctamente aparecerá la siguiente ventana:  
    a. Hacer click en la opción “Disable path length limit”. Esto nos permitirá trabajar
    con rutas de archivos largas en Windows. Ya que hay una limitación en la
    longitud de la ruta de archivo que puede causar problemas al trabajar con
    rutas muy largas.  
    A continuación aparecerá una ventana de confirmación y le damos que sí.
![python_install_4](${pythonInstall4})
- Al finalizar nos debería quedar una ventana como esta:
![python_install_5](${pythonInstall5})
- Para comprobar que Python se instaló correctamente debemos abrir una consola de
comandos y ejecuta lo siguiente: “python --version”.  
Y nos deberá mostrar la versión de Python que instalamos.
![python_install_6](${pythonInstall6})
`

export default exampleMarkDown