// import socketIo from 'socket.io-client'
import './App.css';
import { BrowserRouter as Router,Routes,Route,Outlet } from 'react-router-dom';
import Join from './component/Join/Join';
import Chat from './component/chat/Chat';

// const ENDPOINT = 'http://localhost:4500/';
// const socket=socketIo(ENDPOINT, {transports: ['websocket']});

function App() {

  // socket.on("connect",()=>{
   
  // })
  return (
    <div className="App">
  <Router>
    <Routes>
    <Route exact path='/' element={<Join/>}/>
    <Route exact path='/Chat' element={<Chat/>}/>
    <Route path='/vchat' />
    </Routes>
  </Router>
    </div>
  );
}

export default App;
