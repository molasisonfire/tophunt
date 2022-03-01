import React, {useState} from "react";
import UserPool from "./UserPool";
import usernameImg from "./image/user-icon.png";
import passwordImg from "./image/password-icon.png";
import pixImg from "./image/pix-icon.png";
import emailImg from "./image/email-icon.png";

function Signup ({changePage}){
    const [ username , setUsername] = useState("");
    const [ password , setPassword] = useState("");
    const [ pixkey , setPixkey] = useState("");
    const [ email , setEmail] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();


        UserPool.signUp(username,password,[],null,(err,data)=> {
            if(err){
                console.error(err);
                console.log(data);
                alert("falha no cadastro: usuario ou senha invalido. Usuario pode ja ser existente. Senha deve conter 8 ou mais caracteres, possuir caractere especial e numero/letra, sendo uma letra maiuscula.")

            }else{
                console.log(data);
                alert("Cadastro realizado com sucesso")
                changePage(true)
            }
        })
    };

    return (
        <div>
            <h1>Register Page</h1>
            <form onSubmit={onSubmit}>
            <div>
                <img src={usernameImg} alt="email" className="email"/>
                <input type="text" placeholder="username" className="name" value={username} 
                        onChange={(event) => setUsername(event.target.value)}
                ></input>
            </div>
            <div className="second-input">
                <img src={passwordImg} alt="pass" className="email"/>
                <input type="password" placeholder="password" className="name" value={password}
                        onChange={(event) => setPassword(event.target.value)}
                ></input>
            </div>
            <div className="second-input">
                <img src={pixImg} alt="pass" className="email"/>
                <input type="pix" placeholder="pix key" className="name" value={pixkey}
                        onChange={(event) => setPixkey(event.target.value)}
                ></input>
            </div>
            <div className="second-input">
                <img src={emailImg} alt="pass" className="email"/>
                <input type="email" placeholder="email" className="name" value={email}
                        onChange={(event) => setEmail(event.target.value)}
                ></input>
            </div>
            <div className="login-button">
                <button type="submit" onSubmit={() => onSubmit()}>Register</button>
            </div>
            <div className="login-button">
                    <button onClick={() => changePage(true)}>Login</button>
            </div> 
            </form>
        </div>
    );
};

export default Signup;