import React, { useState } from 'react';
// starts with use
// component must uppercase
// invoke inside function/component body
// don't call hooks conditonally



// useState -function we get from react
const UseStateBasics = () => {
  // console.log(useState('hello world'));
  // // retuns array- that can be assign to the variable
  // const value = useState(1)[0];
  // const handler= useState(1)[1];//function that controls the values that we have in our state  
  // console.log(value,handler);
// const [nameforstatevalue(particular value),functionthat controls the value] = arrayfunctionweinvoked(defaultValue)
  const [text,setText] = useState('random title')

  const handleClick =()=>{
    if(text === 'random title'){

      setText('hello')
    }
    else{
      setText('random title')
    }
  }
  return <React.Fragment>
            <h2>{text}</h2>
            <button className='btn' onClick={handleClick}>Change Title</button>
         </React.Fragment>
  
};

export default UseStateBasics;
// general use of hooks
// use always use for hooks -use
// componenet name must be uppercase
// must be in the function/component body
// cannot call conditionally
