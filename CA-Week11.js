//Tic-Tac-Toe Game

/*
Pulling the squares and board from HTML 
*/
const board = document.getElementById('board')
const squares = document.getElementsByClassName('square')
const players = ['X', 'O']
let currentPlayer = players[0]



/*
Creating the "scoreboard" heading that changed every turn
*/
const scoreBoard = document.createElement('h1')
scoreBoard.textContent = `X goes first!`
scoreBoard.style.textAlign='center'
board.before(scoreBoard)



/*
All possible winning combinations based on 
each squares index number
*/
const winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]



/*
For loop that will display whos turn it is as well as
winner or draw with event listener waiting for 
squares to be clicked
*/
for(let i = 0; i < squares.length; i++){
    squares[i].addEventListener('click', () => {
        if(squares[i].textContent !== ''){
            return
        }
        squares[i].textContent = currentPlayer
        if(winner(currentPlayer)) {
            scoreBoard.textContent=`Victory goes to ${currentPlayer}!`
            return
        }
        if(draw()) {
            scoreBoard.textContent= `Draw!`
            return
        }
        currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0] 
        if(currentPlayer == players[0]) {
            scoreBoard.textContent= `Place your X`
        } else {
            scoreBoard.textContent= `Place your O`
        }     
    })   
}


/*
Winner function declaring the winner is whoever gets one of the
winning combinations from the array first
*/
function winner(currentPlayer) {
    for(let i = 0; i < winning_combinations.length; i++){
        const [a, b, c] = winning_combinations[i]
        if(squares[a].textContent === currentPlayer && squares[b].textContent === currentPlayer && squares[c].textContent === currentPlayer){
            return true
        }
    }
    return false
}


/*
Draw function declaring a draw if neither player gets one 
of the winning combinations from the array before 
all the squares are full
*/
function draw(){
    for(let i = 0; i < squares.length; i++) {
        if(squares[i].textContent === '') {
            return false;
        }
    }
    return true
}


/*
New Game Button function reseting the game by clearing
the board and scoreboard message
*/
function newGameButton() {
    for(let i = 0; i < squares.length; i++) {
        squares[i].textContent = ""
    }
    scoreBoard.textContent=`X's turn!`
    currentPlayer = players[0]
}