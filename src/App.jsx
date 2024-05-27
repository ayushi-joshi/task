import React from 'react'

import Contacts from './Components/Contacts'
import AddCon from './Components/AddCon'
import Edit from './Components/Edit'
import Search from './Components/Search'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import View from './Components/View'
const App = () => {
  return (
    <div>
      <Contacts/>

      <Router>
      <Routes>
       
        <Route path="/contacts/:id" element={<View/>} /> 
      </Routes>
    </Router>


    </div>
  )
}

export default App

