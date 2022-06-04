import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName,setFirstName] = useState('');
  const [email,setEmail] = useState('');
  const [people,setPeople] = useState([]);
  // State value for list of people-empltyArray
// Empty string is a False value

  const handleSubmit = (e)=>{
    e.preventDefault();
    if (firstName && email){
      // {key:variable}
      // const person = {firstName: firstName,email:email};
      const person = {id: new Date().getTime().toString(),firstName ,email};
      // 
      console.log(person)
      setPeople((people)=>{
        return [...people,person];
      });
      // after adding values -making name and email empty strings
      setFirstName('')
      setEmail('');

      // console.log(person)
      // console.log('Submit the form');
    }
    else{
      console.log('empty values')
    }
    // console.log('vishal sharma');
    // Adding item to array if both values are true.
    // console.log(firstName,email);
  }
  return (
  <> 
  <article>
    <form action="" className="form" onSubmit={handleSubmit}>

    <div className="form-control">
      <label htmlFor="firstName">Name : </label>
      <input type="text" name="firstName" id="firstName" value={firstName}
      onChange={(e)=> setFirstName(e.target.value)}/>
    </div>
    
    <div className="form-control">
      <label htmlFor="email">Email : </label>
      <input type="email" name="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
    </div>
    <button type='submit'>Add Person</button>
    </form>
    {/* Display people in array as adding person clicked */}
    {
    //  iterate over state value 
     people.map((person,index)=>{
       const {id,firstName,email}=person;
       return (
         <div className="item" key={id}>
           <h4>{firstName}</h4>
           <p>{email}</p>
         </div>
       );
     })
    }
  </article>
  </>
  )
};

export default ControlledInputs;

// npmuuid for unique ids.