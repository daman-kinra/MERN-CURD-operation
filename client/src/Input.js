import React,{useState} from 'react';
import Data from './Data';
import './App.css'

function Input(props) {
    //All the States required
    const [name, setUsername] = useState('');
    const [adress, setAdress] = useState('');
    const [city, setCity] = useState('');
    const [phoneNumber, setPhone] = useState('');
    const [id,setId] = useState(1);
    const [asd, setAsd] = useState(true);
    const [add, setAdd] = useState(false);
    const [_id,set_ID] = useState('')

//Setting all the states to that specific user's data
const handleEdits = (id) =>{
    fetch(`http://localhost:8000/users/${id}`)
    .then(res=>res.json())
    .then((res)=>{
        setUsername(res.userName);
        setAdress(res.adress);
        setCity(res.city);
        setPhone(res.phoneNumber);
        set_ID(res._id);
        setAdd(true)
    })
    
}

//Posting new Data
const handleClick =()=>{
        setId(id+1);
        fetch('http://localhost:8000/users/add',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id: id,
            userName: name,
            adress: adress,
            city: city,
            phoneNumber: phoneNumber
        })
      }).then(Response=>{
        setAdress('')
        setCity('')
        setUsername('')
        setPhone('')
        setAsd(!asd)
    }).catch(err=>console.log(err))
    }

// Sending new data that post
const handleUpdate = (id) =>{
    fetch(`http://localhost:8000/users/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  userName: name,
                  adress: adress,
                  city: city,
                  phoneNumber: phoneNumber
              })
    }).then(()=>{
        setAdress('')
        setCity('')
        setUsername('')
        setPhone('')
        setAsd(!asd)
    })
}

    return (
        <div className='input-cont'>
            <div className='inner-cont'>
            <h1>User-Table</h1>
            <input type="text" placeholder="UserName" value={name} onChange={e=>setUsername(e.target.value)}/>
            <input type="text" placeholder="Adress" value={adress} onChange={e=>setAdress(e.target.value)}/>
            <input type="text" placeholder="City" value={city} onChange={e=>setCity(e.target.value)}/>
            <input type="text" placeholder="phoneNumber" value={phoneNumber} onChange={e=>setPhone(e.target.value)}/>
            {add===false ? (
                <button onClick={handleClick}>Add</button>
            ):(
                <button onClick={()=>handleUpdate(_id)}>Update</button>
            )}
            </div>
            <div className='data-div'>
            <Data asd={asd} flag={props.flag} handleEdits={handleEdits}/>
            </div>
        </div>
    )
}

export default Input;
