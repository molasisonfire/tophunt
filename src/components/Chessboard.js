import React, { useState } from "react";
import Tile from "./Tile";

const horizontalAxis = ["l1","l2","l3","l4","l5"];
const verticalAxis = ["c1","c2","c3","c4","c5"];
const numbers = shuffleArray();


function shuffleArray() {
    const array = [1,2,3,4,5,6,7,8,9];
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
}


export default function Chessboard(){
    let board = [];
    
    const [showPieces, setShowpieces] = useState(0);
    const [soma, setSoma] = useState(0);    


    const changePageTrue = () => {
        //event.preventDefault();
        setShowpieces(1);
      };

    const declareSoma = (value) => {
        setSoma(value);
    }  

    for(let i = 0; i < horizontalAxis.length;i++){
        
        for(let j = 0 ; j<verticalAxis.length ; j++){
            if(i == 4) continue;
            if(showPieces==0){
                board.push(<Tile x={i} y={j}  changePage={(changePageTrue)} numbers={numbers} show={false} sum={(declareSoma)}/>)
            }else{
                board.push(<Tile x={i} y={j}  changePage={(changePageTrue)} numbers={numbers} show={true} sum={(declareSoma)}/>)
            }
        }
    }
    return (<div>
        <div className="wrapper"></div>
        <div id="board">{board}</div>
        { showPieces==0 ?
        <div>
        <div className="wrapper"></div>
        <h> Libere 4 numeros.  </h>
        <div className="wrapper"></div>
        <h> Selecione a linha que lhe de mais pontos!</h>
        <p></p>
        <div className="wrapper"></div>
        <h> Cuidado para não relogar ou renovar pagina!</h>
        </div>
        :
        <div>
        <div className="wrapper"></div>
        <h> Veja a pontuação ao lado para soma {soma}</h>
        <div className="wrapper"></div>
        <h> Rank#1 receberá pix de 100r$</h>
        <p></p>
        <div className="wrapper"></div>
        <h> Novo jogo disponivel 12h!</h>
        </div>}

        </div>)
}