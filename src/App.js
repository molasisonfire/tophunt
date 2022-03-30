import React, {useState, useEffect} from "react";
import './App.css';
import Signup from './Signup';
import Login from './Login';
import {Account} from "./Account";
import profile from "./image/mountain.png";
import Chessboard from "./components/Chessboard";
import  UserTable  from "./components/UserTable";
import {ScoreTable} from "./components/ScoreTable";
import axios from "axios";

function App () {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await axios("https://cnnijjoiv0.execute-api.sa-east-1.amazonaws.com/Production/allusers");
      setData(result.data['message']);
    })();
  }, []);

  const [moves, setMoves] = useState([]);
  useEffect(() => {
 (async () => {
     const result = await axios("https://cnnijjoiv0.execute-api.sa-east-1.amazonaws.com/Production/allusersplays");
     setMoves(result.data['message']);
   })();
 }, []);


  const [ signPressed , setSignPressed] = useState(1);

  const [userName, setUserName] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const changePageFalse = (value) => {

    setSignPressed(2);
  };

  const changePageTrue = () => {

    setSignPressed(1);
  };

  const changePageGame = () => {
    setSignPressed(0);
  }

  const nameUser = (value) => {
    setUserName(value)
  }

  const passUser = (value) => {
    setUserPassword(value)
  }


  if(signPressed == 0){
    return (
      <div className="main-board">
      <div className="sub-main-board">
        <div className="line">
          <Chessboard name={userName} pass={userPassword} moves={moves}/>
        </div>
          <div className="line">
            <UserTable  dados={data} />
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
        <Login changePage={(changePageFalse)} changePageGame={(changePageGame)} name={  (nameUser)} pass={ (passUser)}/>
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
