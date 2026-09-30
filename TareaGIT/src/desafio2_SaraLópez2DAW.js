/*Desafío 2: Árbitro de Reglas Especiales y Coronación (3.5 Puntos)
Escenario: En tu archivo desafio2.js, programa el motor de toma de decisiones para validar reglas de
juego:*/
/*1. Evaluación de Enroque (if / else combinados): Declara las booleanas reyMovido, torreMovida yenJaque.
Un enroque solo es legal si el rey no se ha movido (!reyMovido),
la torre tampoco (!torreMovida) y
no hay jaque (!enJaque).*/
let reyMovido= false;
let torreMovida= false;
let enjaque= false;

// El enroque es legal si NO se cumple ninguna de las tres condiciones de bloqueo
if (!reyMovido && !torreMovida && !enjaque) {
    console.log('Resultado Enroque: LEGAL');
} else {
    console.log('Resultado Enroque: ILEGAL');
}

/*2. Comportamiento por Pieza (switch): Dado el nombre de una pieza ('torre', 'caballo', 'peon', etc.),
imprime su rango de movimiento. */
let pieza = 'Torre'; // Puedes cambiar este valor por 'Peon', 'Rey', 'Falso', etc.

switch (pieza.toLowerCase()) {
  case 'peon':
    console.log('Movimiento Peón: Avanza 1 casilla hacia adelante (o 2 en el primer turno). Captura en diagonal.');
    break;

  case 'caballo':
    console.log("Movimiento Caballo: Se mueve en forma de 'L' (2x1 casillas). Puede saltar sobre otras piezas.");
    break;

  case 'alfil':
    console.log('Movimiento Alfil: Se mueve en diagonal todas las casillas que quiera.');
    break;

  case 'torre':
    console.log('Movimiento Torre: Se mueve en línea recta horizontal o vertical todas las casillas que quiera.');
    break;

  case 'dama':
    console.log('Movimiento Dama: Combina los movimientos de la torre y el alfil (cualquier dirección recta o diagonal).');
    break;

  case 'rey':
    console.log('Movimiento Rey: Avanza solo 1 casilla en cualquier dirección.');
    break;

  //Incluye obligatoriamente la sección default para manejar casillas vacías o entradas inválidas.
  default:
    console.log('Error: Casilla vacía o pieza inválida.');
    break;
}


/*3. Promoción de Peón (Operador Ternario): Dada la fila de destino de un peón (1 a 8), utiliza un
operador ternario para asignar la figura promocionada: */

let filaDestino = 8; // Valores de prueba de 1 a 8

//si llega a la fila 8 (o fila 1 en negras) se transforma en Dama ('♛' / '♕'), en caso contrario sigue siendo Peón.
let piezaFinal = filaDestino === 8 || filaDestino === 1 ? 'Dama ♛' : 'Peón ♕';

console.log(`Coronación: El peón en la fila ${filaDestino} ahora es: ${piezaFinal}`);
