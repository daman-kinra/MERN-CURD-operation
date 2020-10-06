import React,{useEffect,useState} from 'react';
import './App.css'

function Data(props) {

//Setting the states
const [users, setUsers] = useState([]);
const [del, setDeleted] = useState(true);


//Delete a single user
const child = (id)=>{
        fetch(`http://localhost:8000/users/${id}`,{
            method:'DELETE'
        }).then(setDeleted(!del))
    }

//Fetch data when dleted or added
 useEffect(()=>{
        fetch('http://localhost:8000/users/')
        .then(res=>res.json())
        .then(res=>{
            setUsers(res);
        })
      },[del, props.asd,props.flag])


    return (
        <div className='datainner-div'>
            <div className='inner-div'>
            <h1>Users-Data</h1>
            {users.map((data,pos)=>{
                return(
                <div key={data._id} className={pos%2===0 ? 'data new' : 'data'}>
                <div className='p'>
                    <p>User-Name:</p>
                    <p>{data.userName}</p>
                </div>
                <div className='p'>
                    <p>Adress:</p>
                    <p>{data.adress}</p>
                </div>
                <div className='p'>
                    <p>City:</p>
                    <p>{data.city}</p>
                </div>
                <div className='p'>
                    <p>Number:</p>
                    <p>{data.phoneNumber}</p>
                </div>
                <div className='button'>
                <button onClick={()=>child(data._id)}>Delete</button>
                <button onClick={()=>props.handleEdits(data._id)}>Edit</button>
                </div>
                </div>
                )        
            })}
            </div>
        </div>
    )
}

export default Data
