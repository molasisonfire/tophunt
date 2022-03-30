import './Tile.css';
import { useState } from 'react';
import ArrowLine from "./../image/arrowLine.PNG";
import DiagLine1 from "./../image/ArrowDiag1.PNG";
import DiagLine2 from "./../image/ArrowDiag2.PNG";
import ArrowDown from "./../image/ArrowDown.PNG";
import GoldLine from "./../image/GoldenLine.PNG";
import GoldDiag1 from "./../image/GoldenDiag1.PNG";
import GoldDiag2 from "./../image/GoldenDiag2.PNG";
import GoldDown from "./../image/GoldenDown.PNG";
import numberIcon from "./../image/number.PNG";
import axios from "axios";

var chance = 4;


function updateChances(plays){
  chance = plays;
}

export default function Tile({x,y,changePage,numbers,show,sum,name,pass,plays}){

  //updateChances(plays);
  const [ pos1Pressed , setPos1Pressed] = useState(0);
  const [ pos2Pressed , setPos2Pressed] = useState(0);
  const [ pos3Pressed , setPos3Pressed] = useState(0);
  const [ pos4Pressed , setPos4Pressed] = useState(0);
  const [ pos5Pressed , setPos5Pressed] = useState(0);
  const [ pos6Pressed , setPos6Pressed] = useState(0);
  const [ pos7Pressed , setPos7Pressed] = useState(0);
  const [ pos8Pressed , setPos8Pressed] = useState(0);
  const [ pos9Pressed , setPos9Pressed] = useState(0);

  function reduceMove(){
        const headers = { 
          'Cache-Control': 'no-cache'
        };
        const body = '{ "username" :"'+ name+'", "password" :"' + pass +'", "plays" :'+ chance +'}'; 



        axios.post('https://cnnijjoiv0.execute-api.sa-east-1.amazonaws.com/Production/moveplay', {body})
        .then(function (response) {

        })
        .catch(function (error) {
          console.log("damn " + error);
        });
  }
  

    const imageClick0 = () => {
      if(chance>0){

        setPos1Pressed(1);
        chance = chance - 1;
        reduceMove();
      }
      if(chance == 0 ){
        alert("selecione uma das flechas!")
        
     }
    } 
    const imageClick1 = () => {
      if(chance>0){

        setPos2Pressed(1);
        chance = chance - 1;
        reduceMove();
      }
      if(chance == 0 ){
        alert("selecione uma das flechas!")
        
     }
    }
    
    const imageClick2 = () => {
      if(chance>0){

        setPos3Pressed(1);
        chance = chance - 1;
        reduceMove();
      }
      if(chance === 0 ){
        alert("selecione uma das flechas!")
        
     }
    }
    const imageClick3 = () => {
      if(chance>0){

        setPos4Pressed(1);
        chance = chance - 1;
        reduceMove();
      }
      if(chance == 0 ){
        alert("selecione uma das flechas!")
     }
    }     
    const imageClick4 = () => {
      if(chance>0){

        setPos5Pressed(1);
        chance = chance - 1;
        reduceMove();
      }
      if(chance == 0 ){
        alert("selecione uma das flechas!")
     }
    }     
    const imageClick5 = () => {
      if(chance>0){

        setPos6Pressed(1);
        chance = chance - 1;
        reduceMove();
      }
      if(chance == 0 ){
        alert("selecione uma das flechas!")
     }
    } 
    const imageClick6 = () => {
      if(chance>0){

        setPos7Pressed(1);
        chance = chance - 1;
        reduceMove();
      }
      if(chance == 0 ){
        alert("selecione uma das flechas!")

     }
    } 
    const imageClick7 = () => {
      if(chance>0){

        setPos8Pressed(1);
        chance = chance - 1;
        reduceMove();
      }
      if(chance == 0 ){
        alert("selecione uma das flechas!")
     }
    } 
    const imageClick8 = () => {
      if(chance>0){

        setPos9Pressed(1);
        chance = chance - 1;
        reduceMove();
      }
      if(chance == 0 ){
        alert("selecione uma das flechas!")
      
     }
    } 
    
    const sumResult = () => {
      var soma = 0;
      if(chance <=0){
        if(x == 0 && y == 0) soma = numbers[0]+numbers[4]+numbers[8];
        if(x == 1 && y == 0) soma = numbers[0]+numbers[1]+numbers[2];
        if(x == 2 && y == 0) soma = numbers[3]+numbers[4]+numbers[5];
        if(x == 3 && y == 0) soma = numbers[6]+numbers[7]+numbers[8];
        if(x == 0 && y == 4) soma = numbers[2]+numbers[4]+numbers[6];
        if(x == 0 && y == 0) soma = numbers[0]+numbers[4]+numbers[8];
        if(x == 0 && y == 1) soma = numbers[0]+numbers[3]+numbers[6];
        if(x == 0 && y == 2) soma = numbers[1]+numbers[4]+numbers[7];
        if(x == 0 && y == 3) soma = numbers[2]+numbers[5]+numbers[8];
        
        sum(soma);

        const headers = { 
          'Cache-Control': 'no-cache'
        };
        const body = '{ "username" :"'+ name+'", "password" :"' + pass +'", "soma" :'+ soma +'}'; 



        axios.post('https://cnnijjoiv0.execute-api.sa-east-1.amazonaws.com/Production/addpoints', {body})
        .then(function (response) {

        })
        .catch(function (error) {
          console.log("damn " + error);
        });

        alert("seu resultado foi : " + soma+ "! Consulte a tabela ao lado para checar seus pontos.");

       
        changePage();

      }else{
        alert("Selecione as esferas verdes.");
      }
    }
    if(show==false){
    if( x != 0 && y == 0) return <div className="tile"> { pos1Pressed==0?  <img className="number" src={ArrowLine} onClick={() => sumResult()}/> : <img  src={GoldLine}  /> }</div>;
    if( x == 0 && y == 0) return <div className="tile"> { pos1Pressed==0? <img className="number"src={DiagLine1} onClick={() => sumResult()}/> : <img  src={GoldDiag1} /> }</div>;
    if( x == 0 && y == 4) return <div className="tile"> { pos1Pressed==0? <img className="number"src={DiagLine2} onClick={() => sumResult()}/>: <img  src={GoldDiag2} /> }</div>;
    if( x == 0 && y != 0 && y != 4) return <div className="tile">  { pos1Pressed==0? <img className="number" src={ArrowDown} onClick={() => sumResult()}/>: <img src={GoldDown} /> }</div>;

    if( x == 1 && y == 1) return <div className="tile"> {pos1Pressed!=0? numbers[0] : <img className="number" src={numberIcon} onClick={() => imageClick0()}/>} </div>;
    if( x == 1 && y == 2) return <div className="tile"> {pos2Pressed!=0? numbers[1] :<img className="number" src={numberIcon} onClick={() => imageClick1()}/>} </div>;
    if( x == 1 && y == 3) return <div className="tile"> {pos3Pressed!=0? numbers[2] :<img className="number" src={numberIcon} onClick={() => imageClick2()}/>} </div>;
    if( x == 2 && y == 1) return <div className="tile"> {pos4Pressed!=0? numbers[3] :<img className="number" src={numberIcon} onClick={() => imageClick3()}/>} </div>;
    if( x == 2 && y == 2) return <div className="tile"> {pos5Pressed!=0? numbers[4] :<img className="number" src={numberIcon} onClick={() => imageClick4()}/>} </div>;
    if( x == 2 && y == 3) return <div className="tile"> {pos6Pressed!=0? numbers[5] :<img className="number" src={numberIcon} onClick={() => imageClick5()}/>} </div>;
    if( x == 3 && y == 1) return <div className="tile"> {pos7Pressed!=0? numbers[6] :<img className="number" src={numberIcon} onClick={() => imageClick6()}/>} </div>;
    if( x == 3 && y == 2) return <div className="tile"> {pos8Pressed!=0? numbers[7] :<img className="number" src={numberIcon} onClick={() => imageClick7()}/>} </div>;
    if( x == 3 && y == 3) return <div className="tile"> {pos9Pressed!=0? numbers[8] :<img className="number" src={numberIcon} onClick={() => imageClick8()}/>} </div>;
    }else{
      if( x != 0 && y == 0) return <div className="tile">  </div>;
      if( x == 0 && y == 0) return <div className="tile">  </div>;
      if( x == 0 && y == 4) return <div className="tile">  </div>;
      if( x == 0 && y != 0 && y != 4) return <div className="tile">  </div>;
  
      if( x == 1 && y == 1) return <div className="tile"> {numbers[0]}  </div>;
      if( x == 1 && y == 2) return <div className="tile">  {numbers[1]} </div>;
      if( x == 1 && y == 3) return <div className="tile">  {numbers[2]}  </div>;
      if( x == 2 && y == 1) return <div className="tile"> {numbers[3]}  </div>;
      if( x == 2 && y == 2) return <div className="tile">  {numbers[4]} </div>;
      if( x == 2 && y == 3) return <div className="tile">  {numbers[5]}  </div>;
      if( x == 3 && y == 1) return <div className="tile"> {numbers[6]}  </div>;
      if( x == 3 && y == 2) return <div className="tile"> {numbers[7]}  </div>;
      if( x == 3 && y == 3) return <div className="tile">  {numbers[8]}  </div>;

    }

    return <div className="tile">  </div>;
}