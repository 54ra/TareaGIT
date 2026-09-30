/*Desafío 1: Módulo de Puntuación Material y Control de Turno (3Puntos)
Escenario: En tu archivo desafio1.js, debes desarrollar la lógica para llevar el marcador de una partida de
ajedrez:*/

//1.Declara constantes con los valores de las piezas: PEON=1, CABALLO=3, ALFIL=3, TORRE=5, DAMA=9.
const PEON= 1;
const CABALLO= 3;
const ALFIL= 3;
const TORRE= 5;
const DAMA= 9;

//2. Declara variables para acumular los puntos de las Blancas y de las Negras inicializadas a 0.
let puntosBlancas= 0;
let puntosNegras= 0;

//3. Simula una secuencia de 4 capturas acumulando los puntos con asignación compuesta (+=).
puntosBlancas += PEON;     // Blancas capturan un peón (+1)
puntosNegras += CABALLO;   // Negras capturan un caballo (+3)
puntosNegras += TORRE;     // Negras capturan una torre (+5)
puntosBlancas += DAMA;     // Blancas capturan la dama (+9)

//4. Dado un número de jugada actual (ej. let jugada = 15;), calcula con el operador módulo (%) de quién es el turno.
let jugada= 15;
let estadoTurno = jugada % 2 !== 0 ? 'Mueven Blancas ♔' : 'Mueven Negras ♚';
// el num de jugada determina el turno (Impar = Blancas, Par = Negras)
let ventaja= Math.abs(puntosBlancas-puntosNegras);


/*5. Muestra en la consola el informe completo utilizando exclusivamente Template Literals.
Requerimiento Desafío 1 - Estructura de salida requerida en consola:
Puntuación Blancas: X pts | Puntuación Negras: Y pts
Ventaja Material: Z pts
Estado del Turno: Jugada 15 (Mueven Blancas ♔)*/
console.log(`// Requerimiento Desafío - 1 Estructura de salida requerida en consola:`,);
console.log(`Puntuación Blancas: ${puntosBlancas} pts | Puntuación Negras: ${puntosNegras} pts`);
console.log(`Ventaja Material : ${ventaja} pts`);
console.log(`Estado del Turno: Jugada ${jugada} (${estadoTurno})`);

//y comprueba los tipos de datos con typeof
console.log(" Verificación de Tipos de Datos ");
console.log(`Tipo de puntosBlancas: ${typeof puntosBlancas}`);
console.log(`Tipo de estadoTurno: ${typeof estadoTurno}`);
