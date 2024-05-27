import React from 'react'
import { RxCross1 } from "react-icons/rx";
const View = ({contact, handleClose}) => {
  return (
    <div className="max-w-md mt-10 p-2 max-auto  bg-white rounded-md shadow-md absolute top-0 left-1/2 "  style={{ width: "400px" }}>
    <span  className='flex justify-between'><h2 className="text-2xl font-semibold mb-4">Contact Details</h2><button onClick={handleClose}><RxCross1 /></button></span>
    <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Mobile: {contact.mobile}</p>
  
  </div>
  )
}

export default View
