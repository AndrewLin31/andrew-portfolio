import logo from './Assets/profile.jpg';
import './App.css';

import Navbar from './Components/NavBar/NavBar';
import PillNav from './Components/NavBar/PillNav';
import MyProfile from './Components/MyProfile/MyProfile';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
import Resume from './Components/Resume/Resume';


function App() {
  return (
      <div className="App">
        <div id="nav-section"><PillNav
        logo={logo}
        logoAlt="Company Logo"
        items={[
          { label: 'Home', href: '#home-section' },
          { label: 'About', href: '#about-section' },
          { label: 'Projects', href: '#projects-section' },
          { label: 'Resume', href: '#resume-section' }
        ]}
        activeHref="/"
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
        <div id="home-section"><MyProfile/></div>
        <div id="about-section"><About/></div>
        <div id="projects-section"><Projects/></div>
        <div id="resume-section"><Resume/></div>
        <div id="contact-section"><Contacts/></div>
        <Footer/>
      </div>
  );
}

export default App;
