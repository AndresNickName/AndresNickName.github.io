document.addEventListener('DOMContentLoaded', () => {

    const cuadricula = document.querySelectorAll('.grid div');
    const mostrarJugadorActual = document.querySelector('#Jugador-actual');
    let JugadorActual = 1;
    let empate = 1;
    var mensaje;

    const arrayConVictorias = [
        [0, 1, 2, 3],
        [41, 40, 39, 38],
        [7, 8, 9, 10],
        [34, 33, 32, 31],
        [14, 15, 16, 17],
        [27, 26, 25, 24],
        [21, 22, 23, 24],
        [20, 19, 18, 17],
        [28, 29, 30, 31],
        [13, 12, 11, 10],
        [35, 36, 37, 38],
        [6, 5, 4, 3],
        [0, 7, 14, 21],
        [41, 34, 27, 20],
        [1, 8, 15, 22],
        [40, 33, 26, 19],
        [2, 9, 16, 23],
        [39, 32, 25, 18],
        [3, 10, 17, 24],
        [38, 31, 24, 17],
        [4, 11, 18, 25],
        [37, 30, 23, 16],
        [5, 12, 19, 26],
        [36, 29, 22, 15],
        [6, 13, 20, 27],
        [35, 28, 21, 14],
        [0, 8, 16, 24],
        [41, 33, 25, 17],
        [7, 15, 23, 31],
        [34, 26, 18, 10],
        [14, 22, 30, 38],
        [27, 19, 11, 3],
        [35, 29, 23, 17],
        [6, 12, 18, 24],
        [28, 22, 16, 10],
        [13, 19, 25, 31],
        [21, 15, 9, 3],
        [20, 26, 32, 38],
        [36, 30, 24, 18],
        [5, 11, 17, 23],
        [37, 31, 25, 19],
        [4, 10, 16, 22],
        [2, 10, 18, 26],
        [39, 31, 23, 15],
        [1, 9, 17, 25],
        [40, 32, 24, 16],
        [9, 17, 25, 33],
        [8, 16, 24, 32],
        [11, 17, 23, 29],
        [12, 18, 24, 30],
        [1, 2, 3, 4],
        [5, 4, 3, 2],
        [8, 9, 10, 11],
        [12, 11, 10, 9],
        [15, 16, 17, 18],
        [19, 18, 17, 16],
        [22, 23, 24, 25],
        [26, 25, 24, 23],
        [29, 30, 31, 32],
        [33, 32, 31, 30],
        [36, 37, 38, 39],
        [40, 39, 38, 37],
        [7, 14, 21, 28],
        [8, 15, 22, 29],
        [9, 16, 23, 30],
        [10, 17, 24, 31],
        [11, 18, 25, 32],
        [12, 19, 26, 33],
        [13, 20, 27, 34],
    ]


    function encontrarGanador() {

        //recorre el array para encontrar el ganador
        for (let y = 0; y < arrayConVictorias.length; y++) {

            const ficha1 = cuadricula[arrayConVictorias[y][0]];
            const ficha2 = cuadricula[arrayConVictorias[y][1]];
            const ficha3 = cuadricula[arrayConVictorias[y][2]];
            const ficha4 = cuadricula[arrayConVictorias[y][3]];

            //verifica si el Jugador-uno gano
            if (
                ficha1.classList.contains('Jugador-uno') &&
                ficha2.classList.contains('Jugador-uno') &&
                ficha3.classList.contains('Jugador-uno') &&
                ficha4.classList.contains('Jugador-uno')
            ) {
                empate = 0;
                mensaje = confirm("Felicidades Jugador 1, GANASTE!!! \n Quieres volver a jugar?");
                //Verifica si el usuario acepto el mensaje
                if (mensaje) {
                    location.reload();
                }
                else {
                    encontrarGanador();
                }
                
            }
            //verifica si el Jugador-dos gano
            else if (
                ficha1.classList.contains('Jugador-dos') &&
                ficha2.classList.contains('Jugador-dos') &&
                ficha3.classList.contains('Jugador-dos') &&
                ficha4.classList.contains('Jugador-dos')
            ) {
                empate = 0;
                mensaje = confirm("Felicidades Jugador 2, GANASTE!!! \n Quieres volver a jugar?");
                //Verifica si el usuario acepto el mensaje
                if (mensaje) {
                    location.reload();
                }
                else {
                    encontrarGanador();
                }
            }
            //obtiene el valor para obtener el empate
            else {
                empate += 1;
            }
        }

        //verifica si es empate
        if (empate > 2890) {
            mensaje = confirm("Esto es un EMPATE!!! \n Quieres volver a jugar?");
                //Verifica si el usuario acepto el mensaje
                if (mensaje) {
                    location.reload();
                }
                else {
                    encontrarGanador();
                }
        }
    }

    //recorre el tablero
        for (let i = 0; i < cuadricula.length; i++) {
            cuadricula[i].onclick = () => {
                //verifica que el jugador coloque su ficha sobre un espacio ya ocupado
                if (cuadricula[i + 7].classList.contains('ocupado') && !cuadricula[i].classList.contains('ocupado')) {
                    if (JugadorActual == 1) {
                        cuadricula[i].classList.add('ocupado');
                        cuadricula[i].classList.add('Jugador-uno');
                        JugadorActual = 2;
                        mostrarJugadorActual.innerHTML = JugadorActual;
                    } else if (JugadorActual == 2) {
                        cuadricula[i].classList.add('ocupado');
                        cuadricula[i].classList.add('Jugador-dos');
                        JugadorActual = 1;
                        mostrarJugadorActual.innerHTML = JugadorActual;
                    }
                } else alert('No se puede colocar la ficha aqui!')
                encontrarGanador();
            }
        }
   
})

