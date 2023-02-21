import React from 'react'
import Newss from './Newss'
import Header from './Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' 
            element={<Newss key="general" country="in" category="general" />} />
         
          <Route path='/entertainment' 
            element={<Newss key="entertainment" country="in" category="entertainment" />} />
          
          <Route path='/technology' 
            element={<Newss key="technology" country="in" category="technology" />} />
         
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

