import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { useState } from 'react';
const AddCon = ({ handleAddContact, handleClose}) => {
  const [formData, setFormData] = useState({
    name:"",email:"", mobile:"", Address:""
  })
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
    const handleReset = () => {
      setFormData(" ");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddContact(formData);
    setFormData({
      name: "",
      email: "",
      mobile: "",
      Address: ""
  }); 
   };

  return (
    <div className="max-w-md mt-10 p-2 max-auto  bg-white rounded-md shadow-md absolute top-0 left-1/2 "  style={{ width: "400px" }}>
    <span  className='flex justify-between'><h2 className="text-2xl font-semibold mb-4">Add Contact</h2><button onClick={handleClose}><RxCross1  /></button></span>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2"> Name</label>
        <input required type="text" id="firstName" name="name" value={formData.name} className="border  border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" onChange={handleChange} />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">Email</label>
        <input required type="text" id="lastName" name="email" value={formData.email} className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" onChange={handleChange}/>
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
        <input required type="text" id="phone" name="mobile" value={formData.mobile} className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500" onChange={handleChange} />
      </div>
      
      <div className="flex justify-end">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
        <button type="reset" className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400" >Reset</button>
      </div>
    </form>
  </div>
  )
}

export default AddCon
