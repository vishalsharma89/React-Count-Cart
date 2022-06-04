import React, { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson] = useState({
    name:'Vishal',
    age:24,
    message:'radom message',
  });
  console.log(person)

  const[name,setName] = useState('Vishal');
  const[age,setAge] = useState(24);
  const[message,setMessage] = useState('random message');

  const changeMessage =()=>{
    // setPerson({...person,message:"Jai mata di"})
    setMessage('Jai bholeNaath')
  }
  const changeName =()=>{
    // setPerson({...person,message:"Jai mata di"})
    setName('bhaisahab')
  }
  return <>
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{message}</h3>
    <button className='btn' onClick={changeMessage}>Change Message</button>
    <button className='btn' onClick={changeName}>Change Name</button>

  </>
};

export default UseStateObject;
