import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value,setvalue] = useState(0);
  useEffect(()=>{
    console.log('call useEffect');
    if(value>=1){
      // document.title = `Messages`;
      document.title = `New Messasge(${value})`;
    }

  });
  console.log('render component');
  return (
    <>
    <h1>{value}</h1>
    <button className="btn" onClick={()=>setvalue(value+1)}>Click me</button>
    </>
  );
};

export default UseEffectBasics;
