import React, {useState} from "react";
import './App.css';
import Signup from './Signup';
import Login from './Login';
import {Account} from "./Account";
import Status from "./Status";
import profile from "./image/mountain.png";
import Sound from "./components/gameSound.mp3";
import {Howl , Howler} from "howler";
import Chessboard from "./components/Chessboard";
import  {UserTable}  from "./components/UserTable";
import {ScoreTable} from "./components/ScoreTable";
import PlayerSound from "./components/PlayerSound";

const App = () => {
  const [ signPressed , setSignPressed] = useState(1);
  fetch("https://cnnijjoiv0.execute-api.sa-east-1.amazonaws.com/Production/allusers")
  .then(response => {
    console.log(response)
      // handle the response
  })
  .catch(error => {
      // handle the error
  });
  const changePageFalse = (value) => {
    //event.preventDefault();
    setSignPressed(2);
  };

  const changePageTrue = (value) => {
    //event.preventDefault();
    setSignPressed(1);
  };

  const changePageGame = (value) => {
    setSignPressed(0);
  }

  if(signPressed == 0){
    return (
      <div className="main-board">
      <div className="sub-main-board">
        <div className="line">
          <Chessboard/>
        </div>
          <div className="line">
            <UserTable/>
            <ScoreTable/>
          </div>
      </div>
      </div>
    )

  }


  if(signPressed == 1){
  return (
    <Account>
    <div className="main">
     <div className="sub-main">
       <div>
       
         <div className="imgs">
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>
           </div>
         </div>
        <Login changePage={(changePageFalse)} changePageGame={(changePageGame)}/>
       </div>
     </div>
    </div>
    </Account>
  )
}else{
  return (
  <Account>
  <div className="main">
   <div className="sub-main-signin">
     <div>
       <div className="imgs">
         <div className="container-image">
           <img src={profile} alt="profile" className="profile"/>
         </div>
       </div>
      <Signup changePage={(changePageTrue)}/>
     </div>
   </div>
  </div>
  </Account>);
};

};

export default App;
