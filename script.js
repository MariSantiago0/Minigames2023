const cvs = document.getElementById('tetris');
const ctx = cvs.getContext('2d');
const SQ = 20;

/* creating the board*/
const ROW = 20;
const COLUMN =10;
const VACANT="white";

/* defying the board as an empty array - STILL CREATING */
let board = [];
for (r=0;r<ROW;r++){
  board[r]=[];
  for (c=0;c<COLUMN;c++){
    board[r][c]=VACANT;
  }
}

/* drawing in the board */
function drawBoard(){
  for(r=0;r<ROW;r++){
    for(c=0;c<COLUMN;c++){
      drawSquare(c,r,board[r][c]);
    }
  }
}

drawBoard();

/* função para desenhar quadrados*/
function drawSquare(x,y,color){
ctx.fillStyle=color;
ctx.fillRect(x*SQ,y*SQ,SQ,SQ);
ctx.strokeStyle = "black";
ctx.strokeRect(x*SQ,y*SQ,SQ,SQ);
}

drawSquare(1,0,"skyblue");

/* draw the tetrominoes*/
const Z = [[[1,1,0],[0,1,1],[0,0,0]], [[0,0,1],[0,1,1],[0,1,0]], [[0,0,0],[1,1,0],[0,1,1]],[[0,1,0],[1,1,0],[1,0,0]]]
let piece = Z[0]
const pieceColor = "green"
for(r=0;r<piece.length;r++){
  for(c=0;c<piece.length; c++){
    if(piece[r][c]){
      drawSquare(c,r,pieceColor);
    }
  }
}


/*quadrados*/

ctx.fillStyle="skyblue";
ctx.fillRect(0,0,20,20);
ctx.strokeStyle = "black";
ctx.strokeRect(0,0,20,20);


ctx.fillStyle= "forestgreen";
ctx.fillRect(100,140,20,20);
ctx.strokeStyle= "black";
ctx.strokeRect(100,140,20,20);

ctx.fillStyle= "forestgreen";
ctx.fillRect(120,140,20,20);
ctx.strokeStyle ="black";
ctx.strokeRect(120,140,20,20);

ctx.fillStyle= "forestgreen";
ctx.fillRect(140,140,20,20);
ctx.strokeStyle ="black";
ctx.strokeRect(140,140,20,20);

ctx.fillStyle= "forestgreen";
ctx.fillRect(140,160,20,20);
ctx.strokeStyle ="black";
ctx.strokeRect(140,160,20,20);



