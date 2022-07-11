// ============== Constantes ================ //
const STATUS_DISPLAY = document.querySelector('.restart');
const GAME_STATE = ["","","","","","","","",""];
const WINNINGS = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6]
                ];
const WIN_MESSAGE = () => {'El jugador ${jugador} ha ganado!!!'};
const DRAW_MESSAGE = () => {'El juego termino en un empate!'};
const PLAYER_TURN = () => {'Turno del jugador ${jugador}'};
// ============== Variables ================ //
let gameActive = true;
let jugador = "O";
// ============== Funciones ================ //
let main = () => {
    handleStatusDisplay(PLAYER_TURN());
    listeners();
}
let listeners = () => {
    document.querySelector('.contenedor-juego').addEventListener('click', handleCellClick);
    document.querySelector('.restart').addEventListener('click', handleRestartGame); 
}
function handleStatusDisplay(message) {
    STATUS_DISPLAY.innerHTML = message;
}
let handleRestartGame = () => {
    gameActive = true;
    jugador = "X";
    rstartGameState();
    handleStatusDisplay(PLAYER_TURN());
    document.querySelectorAll('.casilla').forEach(cell => cell.innerHTML = "");
}