import './App.css';
import { Link, Routes, Route } from "react-router-dom";
import About from './pages/About'
import Home from './pages/Home'
import WorkExperience from './pages/WorkExperience'
import NoPages from './pages/NoPages'
import Contact from './pages/Contact'
function App() {
  return (
    <>
    <ul className='navList'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/workExperience'>Work Experience</Link>
      </li>
      <li>
        <Link to='/contact'>Contact</Link>
      </li>
    </ul>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/workExperience' element={<WorkExperience />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<NoPages />} />
    </Routes>
    </>
    
  );
}

export default App;
