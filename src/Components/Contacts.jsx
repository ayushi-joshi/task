import React, { useEffect } from 'react'
import { IoAddCircleOutline } from "react-icons/io5";
import { GrView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { useState } from 'react';
import AddCon from './AddCon';
import Edit from './Edit';
import View from './View';


const Contacts = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [edit, setEdit] = useState()
  const [search, setSearch] = useState('');
  const handleAddContactClick = () => {
    setShowAddForm(true);

  };
  const handleView = (contact) => {
    setSelectedContact(contact);
    setShowDetail(true)
  };
  const handleEdit = (contact) => {
    setEdit(contact)

    setShowEditForm(true);
    setShowAddForm(false);
  };

  const [contact, setContact] = useState([]);

  const handleAddContact = (newContact) => {
    const newId = contact.length + 1;
    const contactWithId = { ...newContact, id: newId };
    setContact([...contact, contactWithId]);
    setShowAddForm(false);
  };
  const handelDeleteContact = (id) => {
    setContact((contact) =>
      contact.filter((con) => con.id !== id)
    );
  }
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/BitcotDev/fresher-machin-test/main/json/sample.json')
        const data = await response.json();
        setContact(data);

      } catch (error) {
        console.log("error")
      }
    }
    fetchData();
  }, [])
  const filteredContacts = contact.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className='p-10'>
      <div className=' border-2 p-2 w-1/3 flex flex-col items-center'>

        <div className=' ' onClick={handleAddContactClick} ><button className='bg-blue-300 rounded  flex items-center text-white' >Add Contact <IoAddCircleOutline className='ms-2' size={20} /> </button></div>
        <input type="text" placeholder='Search' className='mt-2 border-2 rounded' onChange={handleSearch} />

        {
           filteredContacts.map((data) => (

            <ul className="border  w-4/5 border-gray-200 rounded-md overflow-hidden divide-y divide-gray-200 mt-3">
              <li key={data.id} className="flex items-center justify-between py-3 px-4">
                <IoMdContact />
                <span className="text-gray-900">{data.name}</span>
                <span className="text-gray-900">{data.mobile}</span>
                <div className="flex space-x-2">
                  <button className="text-blue-500 hover:text-blue-600 focus:outline-none" onClick={() => handleView(data)}>
                    <GrView />
                  </button>
                  <button className="text-green-500 hover:text-green-600 focus:outline-none" onClick={() => handelDeleteContact(data.id)}>
                    <MdDelete />

                  </button>
                  <button className="text-red-500 hover:text-red-600 focus:outline-none" onClick={() => handleEdit(data)}>
                    <MdEdit />
                  </button>
                </div>
              </li>
            </ul>
          ))
        }
      </div>
      {showAddForm && <AddCon handleAddContact={handleAddContact} handleClose={() => setShowAddForm(false)} />}
      {showEditForm && <Edit data={edit} handleClose={() => setShowEditForm(false)} contact={contact} setContact={setContact} />}
      {showDetail && <View contact={selectedContact} handleClose={() => setShowDetail(false)} />}
    </div>
  )
}

export default Contacts
