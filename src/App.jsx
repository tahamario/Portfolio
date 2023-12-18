import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Projects from './Pages/Projects'
import Home from './Pages/Home'
import Experiences from './Pages/Experiences'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProjectDisplay from './Pages/ProjectDisplay'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project/:id' element={<ProjectDisplay />} />
          <Route path='/experiences' element={<Experiences />} />
        </Routes>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
      </BrowserRouter>
    </div>
  )
}

export default App
