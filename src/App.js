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
            element={<Newss key="technology" country="in" category="technology" />} /> <Route path='/business' 
            element={<Newss key="business" country="in" category="business" />} /><Route path='/science' 
            element={<Newss key="science" country="in" category="science" />} />
            <Route path='/sports' 
            element={<Newss key="sports" country="in" category="sports" />} />
            <Route path='/health' 
            element={<Newss key="health" country="in" category="health" />} />
            <Route path='/general' 
            element={<Newss key="general" country="in" category="general" />} />
         
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

