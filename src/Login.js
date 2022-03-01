import React, {useState,useContext} from "react";
import { AccountContext } from "./Account";
import usernameImg from "./image/user-icon.png";
import passwordImg from "./image/password-icon.png";


function Login  ({changePage,changePageGame}) {
    const [ username , setUsername] = useState("");
    const [ password , setPassword] = useState("");


    const {authenticate } = useContext(AccountContext);

    const onSubmit = (event) => {
        event.preventDefault();
    
        authenticate(username,password)
        .then(data => {
            console.log("Logged in",data);
            changePageGame(true);
        })
        .catch(err => {
            console.error("Failed to login",err);
            alert("usuario ou senha invalidos.")
        });
       
    };

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <img src={usernameImg} alt="email" className="email"/>
                    <input type="text" placeholder="username" className="name" value={username} onChange={(event) => setUsername(event.target.value)}
                    ></input>
                </div>
                <div className="second-input">
                    <img src={passwordImg} alt="pass" className="email"/>
                    <input type="password" placeholder="password" className="name" value={password} onChange={(event) => setPassword(event.target.value)}
                    ></input>
                </div>

                <div className="login-button">
                    <button type="submit">Login</button>
                 </div>
                 <div className="login-button">
                    <button onClick={() => changePage(true)}>Sign Up</button>
                 </div>                 
            </form>
        </div>
    );
};

export default Login;