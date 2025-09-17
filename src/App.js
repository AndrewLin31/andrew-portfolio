import logo from './Assets/logo.svg';
import './App.css';

import Navbar from './Components/NavBar/NavBar';
import MyProfile from './Components/MyProfile/MyProfile';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contacts from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';
import Resume from './Components/Resume/Resume';

function App() {
  return (
      <div className="App">
        <Navbar/>
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
