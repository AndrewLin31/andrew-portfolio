import logo from './Assets/profile.jpg';
import './App.css';

import { Routes, Route, useLocation } from 'react-router-dom';
import PillNav from './Components/NavBar/PillNav';
import MyProfile from './Components/MyProfile/MyProfile';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
import Resume from './Components/Resume/Resume';


function App() {
  const location = useLocation();

  return (
      <div className="App">
        <div id="nav-section"><PillNav
        logo={logo}
        logoAlt="Company Logo"
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
          { label: 'Projects', href: '/projects' },
          { label: 'Resume', href: '/resume' },
          { label: 'Contact', href: '/contact' }
        ]}
        activeHref={location.pathname}
        className="custom-nav"
        ease="power2.easeOut"
        baseColor="#240808ff"
        pillColor="#ffffff"
        hoveredPillTextColor="#ffffff"
        pillTextColor="#000000"
        theme="dark"
        
        initialLoadAnimation
        />
        </div>
        <Routes>
          <Route path="/" element={<MyProfile/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/contact" element={<Contacts/>} />
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
