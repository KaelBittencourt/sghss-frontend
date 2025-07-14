import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Sidebar } from './components/layout/Sidebar'
import { Header } from './components/layout/Header'
import { Dashboard } from './pages/Dashboard'
import { Patients } from './pages/Patients'
import { Professionals } from './pages/Professionals'
import { Administration } from './pages/Administration'
import { Telemedicine } from './pages/Telemedicine'
import { Security } from './pages/Security'
import './App.css'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [currentUser, setCurrentUser] = useState({
    name: 'Dr. Michael de Favere Bitencourt',
    role: 'Médico',
    avatar: '/api/placeholder/40/40'
  })

  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar isOpen={sidebarOpen} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header 
            onMenuClick={() => setSidebarOpen(!sidebarOpen)}
            user={currentUser}
          />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/professionals" element={<Professionals />} />
              <Route path="/administration" element={<Administration />} />
              <Route path="/telemedicine" element={<Telemedicine />} />
              <Route path="/security" element={<Security />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App

