import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Head from './pages/Head'
import About from './pages/About'
import Contact from './pages/Contact'
import Add from './pages/Add'
import Update from './components/Update'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Head />} />
        <Route path="/about" element={<About />} />
        <Route path="/add" element={<Add />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
