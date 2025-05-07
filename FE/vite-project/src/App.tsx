import { useEffect } from 'react'
import './App.css'

function App(){

  function SendMessage(){}

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8080');

    ws.onmessage = (event) => {
      alert(event.data);
    }, []);

 return (
      <div>
        <input type="text" placeholder='Message....'></input>
        <button onClick={SendMessage}>Send</button>
      </div>
    
  )
}
export default App
