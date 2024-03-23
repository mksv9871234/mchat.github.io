import React, { createContext, useEffect, useState } from 'react';
import style from './Chat.module.css'
import {user} from '../Join/Join'
import socketIo from 'socket.io-client'
import Message from '../Message/Message'
import ReactScrollToBottom from 'react-scroll-to-bottom'
import {X,Send} from 'react-feather'
const ENDPOINT = 'https://vchat-github-io-1.onrender.com/';

let socket;

const Chat = () => {
  const [id,setId] = useState("")
  const [messages,setMessages] = useState([])
  const send=()=>{
    const message = document.getElementById("chatInput").value;
    socket.emit('message',{message,id});
    document.getElementById("chatInput").value= '';
  }

  useEffect(()=>{
     socket = socketIo(ENDPOINT, {transports:['websocket']});


    socket.on('connect',()=>{
      setId(socket.id)
    })

      socket.emit('joined',{user})

      socket.on('welcome',(data)=>{
        setMessages([...messages,data]);
        console.log(data.user,data.message)
      })

      socket.on('userJoined',(data)=>{
        setMessages([...messages,data]);
        console.log(data.user, data.message)
      })

      socket.on('leave',(data)=>{
        setMessages([...messages,data]);
        console.log(data.user,data.message)
      })

      return ()=>{
          socket.emit('disconnect');
          socket.off();
      }

  },[])

  useEffect(()=>{
      socket.on('sendMessage',(data)=>{
        setMessages([...messages,data]);
          console.log(data.user, data.message, data.id)
      })
      return ()=>{
        socket.off();
      }
  },[messages])

  
  return (
    <div className={style.chatPage}>
      <div className={style.chatContainer}>
        <div className={style.header}>
          <div>
          <h3>vchat</h3>
          </div>
     <a href='/'> <X className={style.closeIcon}/></a>
        
        </div>
        <ReactScrollToBottom className={style.chatBox}>
            {messages.map((item,i)=> <Message key={i} user={item.id===id?'':item.user} message={item.message} classs={item.id===id?'right' : 'left'} /> )}
        </ReactScrollToBottom>
        <div className={style.chatInput}>
          <input onKeyPress={(event)=> event.key === 'Enter' ? send() : null} type='text' id='chatInput' placeholder='massage'/>
          <button onClick={send} id='InputBtn'><div><Send className={style.sendIcon}/></div></button>
        </div>
      </div>
    </div>
  );
}

export default Chat;

