import React from 'react';
import './Message.css'

const Message = ({user,message,classs}) => {

    // const right={
    //     float: "right",
    // backgroundColor: "rgb(234, 54, 54)",
    // color: "white"
    // }
    // const left={
    //     float:'left',
    //     backgroundColor:'rgb(138, 254, 142)',
    //     color:'black'
    // }
    const messagebox={
        padding: "10px",
        margin: "5px 10px",
        borderRadius: "0.5vmax",
        display: "inline-block",
        clear: "both",
        fontSize: "16px",
        '@media (mix-width: 768px)': { 
            fontSize:'3.3vw'
          },
    }


    if(user){
        return(
            <div style={messagebox} className={`${classs}`}>
                {`${user}: ${message}`}
      
    </div>
        )
    }
    else{
        return(
            <div style={messagebox} className={`${classs}`}>
            {`You: ${message}`}
      
    </div> 
        )
    }
     
}

export default Message;
