import React,{useState} from 'react';

import './App.css';
import Input from './Input';

function App() {
  const [flag, setFlag] = useState(true)

//Delete All users
  const handleDelete = ()=>{
    fetch('http://localhost:8000/users/delete',{
      method: 'DELETE'
    }).then(()=>{
      console.log('Deleted');
      setFlag(!flag)
    })
  }
  return (
    <div className="App">
      <div className='inner-app'>
      <Input flag={flag}/>
      <div className='btn'>
      <button onClick={handleDelete}>DeleteAll</button>
      </div>
      </div>
    </div>
  );
}

export default App;
