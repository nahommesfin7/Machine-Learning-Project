import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ApplicationPage from './pages/ApplicationPage'
import Navbar from './components/Navbar'
import AdminPage from './pages/AdminPage'
import Login  from './components/Login'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
   
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/application" element={<ApplicationPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>
)
