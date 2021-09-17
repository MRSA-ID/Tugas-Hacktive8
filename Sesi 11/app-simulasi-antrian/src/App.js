import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [antrian, setAntrian] = useState(['[ Antrian Kosong ! ]'])
  const [isDisable, setisDisable] = useState(true);
  const style = "=>"

  const handleChange = (e) =>{
    setUsername(e.target.value)
    if(e.target.value.length == 0){
      handleIsValue(true)
    }else{
      handleIsValue(false)
    }
  }

  const handleAntrikan = () =>{
    if(antrian[0] === '[ Antrian Kosong ! ]'){
      setAntrian(antrian => [...antrian.slice(1), username])
    }
    else{
      setAntrian(antrian => [...antrian, [style],username])
    }
  }

  const handleIsValue = (value) =>{
    setisDisable(value)
  }

  const handleMajukan = () =>{
    if(antrian.length === 1){
      setAntrian(antrian => [...antrian.slice(1), '[ Antrian Kosong ! ]'])
      alert(`Tidak Ada yang untuk Dimajukan Karna Antrian Kosong (${antrian.length - 1})`)
    }else{
      setAntrian(antrian => [...antrian.slice(1).slice(1)])
    }
    
  }

  const Antrian = ({username}) => <div><li>{username}</li></div>

  return (
    <div className="App">
      <header className="header">
        <h1>My Third React App</h1>    
      </header> 
      <hr/>
      <div>
          <label>Masukkan Nama</label>
          <h5>{username}</h5>
          <input onChange={handleChange}></input>
      </div>
      <button onClick={handleAntrikan} disabled={isDisable}>Antrikan!</button>
      <button onClick={handleMajukan}>Majukan!</button>
      <hr/>
      <footer>
        <ul>
          {
            antrian.map((username,i) => (
              <Antrian 
                username={username}
                key={username + i}
              />
            ))
          }
        </ul>
      </footer>
    </div>
  );
}

export default App