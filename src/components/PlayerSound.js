import React, {useState} from "react";
import "./../App.css";
import Sound from "./gameSound.mp3";
import {Howl , Howler} from "howler";


const PlayerSound = () => {

    const [ soundPressed , setSoundPressed] = useState(0);



    const SoundPlay = (src) => {
  
            const sound = new Howl({
            src,
            autoplay: true
          });
        
      Howler.volume(10.0);
      
      if(soundPressed == 0){
          setSoundPressed(1);
          sound.play();
      }else{
          setSoundPressed(0);
          sound.stop();
      }
    
    }
    
  
      return (
        <div className="vertical">
            <button className="playbutton" onClick={() => SoundPlay(Sound)} name="Sound"></button>
        </div>
      )
  


  
  };
  
  export default PlayerSound;
  