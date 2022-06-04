import React, { useEffect } from 'react';

const Modal = ({modalContent,closeModal}) => {
  // useeffect for closing close model after 3 sec
  useEffect(()=>{
    setTimeout(()=>{
      closeModal();
    },3000)
  })
  return (
    <>
    <div className="modal">
      <p>{modalContent}</p>
    </div>
    </>
  )
};

export default Modal;
