import './App.css';
import React from 'react';
import { HomePage } from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { RecipePage } from './pages/RecipePage';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/recipe/:id' element={<RecipePage />}/>
        <Route  path='/country/:country' element={<HomePage />} />
        <Route  path='/ingredient/:ingredient' element={<HomePage />} />
        <Route  path='/category/:category' element={<HomePage />} />
      </Routes>
      </Router>
    </>
  )
}

export default App
