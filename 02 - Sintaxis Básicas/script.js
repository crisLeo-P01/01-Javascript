/* SENTENCIA
Las sentencias se consideran unidades básicas de programación y terminan todas en punto y coma (;) En principio el no colocar los (;) no dará error pero se recomienda colocarlas como buena práctica. Al tener un proyecto con cientos de líneas de códigos y al no colocar los (;) a simple vista no sabes donde termina y donde comienza otra. Entonces a la hora de corregir un fallo entre esas cientos de líneas se hace más difícil saber de donde radica el error.
Ejemplos de sentencias serían: alert("Hola Mundo"); document.write("Hola mundo");

FUNCIONES PREDEFINIDAS
Son funciones que vienen con el lenguaje de turno, en este caso con JavaScript. Es una especie de biblioteca en donde aparecen un montón de funciones y estarán siempre que las necesites.
Ejemplos: alert(); document.write(); isNan();

TIPOS DE DATOS
A la hora de programar en cualquier lenguaje vas a tener que manejar tipos de datos.
En JavaScript hay tres tipos de datos básicos: Números, Strings, Booleans
Los tipos de datos NUMÉRICOS son básicamente números, da igual que sean enteros o decimales.
los STRINGS son valores de textos como por ejemplo "Juan". Los strings siempre deben ir entre comillados. A diferencia del tipo numérico de que no lleva comillas.
Y los valores BOOLEANOS a diferencia de los dos anteriores que tienen infinitas posibilidades (números o texto), en Booleans solo hay dos posibilidades y son TRUE o FALSE y esto esta muy relacionado con el concepto de VARIABLES.

VARIABLES
Espacio en la memoria del ordenador (RAM) donde se almacenará un valor que podrá cambiar durante la ejecución del programa.
La variable podría ser representado como un tipo de cajón donde podemos almacenar datos. Estos datos no es que se guardan el disco duro de nuestra PC, sino que se almacenan es nuestra memoria RAM temporalmente y es de tipo volátil. Esto quiere decir que cuando se cierra el programa o se apaga la PC, se borran de forma automática de la RAM.
La sintaxis (declaración): VAR puntuacion,
Reglas a la hora de dar nombre a una variable:
1- Han de comenzar por letra, símbolo "$" o "_" EJEMPLO: puntuacion, $puntuacion, _puntacion
2- Han de contener solo letras, números, "$" y "_" No puede comenzar con número. EJEMPLO: puntuacion1, puntuacion_1, puntuacion$
3- Son CASE SENSITIVE. Quiere decir que distingue entre mayúsculas y minúsculas.
4- No deben ser palabras reservadas
5- Se recomienda que seas descriptivos.

USANDO E INICIANDO VARIABLES
Iniciar una variable es depositar en ella un valor. Por ejemplo iniciar una variable seria:
    var puntuacion=0; DECLARADO E INICIADO
    o
    var puntuacion;
    puntuacion=0; DECLARADO Y LUEGO INICIADO
Otra forma para simplificar y hacerlo solo en una línea sería: var puntuacion=0;
Si se van a declarar varias variables en la misma línea:
var puntuacion,record,jugador;
Otra forma seria declararlas e iniciarlas:
var puntuacion=0,record=5000,jugador="Juan";-->


alert ("Hola Mundo"); // Función predefinida

let nombre = "Juan";
alert (nombre);

let edad;
edad = 32;

let record = 3000;

alert (edad);

let contrato = "mensual",sueldo = 3000,vacaciones = "enero";
alert (sueldo);
*/