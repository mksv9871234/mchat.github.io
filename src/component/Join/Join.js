import React, { useState } from 'react';
import style from './Join.module.css'
import { Link } from 'react-router-dom';
import design from './Logo.png'

let user;

const sendUser=()=>{
  user = document.getElementById("joinInput").value;
  document.getElementById("joinInput").value = '';
 }

const Join = () => {

  const [name,setName] = useState("")
  console.log(name)
  return (
      <div className={style.joinPage}>
        <div className={style.Joincontainer}>
          <img src={design} alt='Logo'/>
            <h1>vchat</h1>
            <div className={style.inputField}>
                <input onChange={(e)=> setName(e.target.value)} type='text' id='joinInput' placeholder='enter your name' />
               <Link onClick={(event)=> !name ? event.preventDefault(): null} to={'chat'}> <button onClick={sendUser}>Submit</button></Link>
            
            </div>
        </div>
    </div>

  );
}

export default Join;
export {user}
