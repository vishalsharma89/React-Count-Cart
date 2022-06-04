import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  const [size,setSize] = useState(window.innerWidth);
  // console.log(size);

  const checkSize =()=>{
    setSize(window.innerWidth);
  };
  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize',checkSize)
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize',checkSize);
    };
  }, [])
  console.log('render')
  return (
    <>

  <h2>Window Size</h2>
    <p>{size} px</p>
  </>
    )
};

export default UseEffectCleanup;
