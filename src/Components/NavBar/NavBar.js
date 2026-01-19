import React, { useEffect, useState } from "react";
import profile from '../../Assets/profile.jpg';
import './NavBar.css';

const SECTIONS = [
    { id: 'home-section', label: 'Home' },
    { id: 'about-section', label: 'About Me' },
    { id: 'projects-section', label: 'Projects' },
    { id: 'resume-section', label: 'Resume' },
];

const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
};

const Navbar = () => {
    const [active, setActive] = useState('home-section');
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
        );

        SECTIONS.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    // useEffect(() => {
    //     const onResize = () => {
    //         if (window.innerWidth > 900) setOpen(false);
    //     };
    //     window.addEventListener('resize', onResize);
    //     return () => window.removeEventListener('resize', onResize);
    // }, []);

    return (
        <nav className={`nav-bar ${open ? 'open' : ''}`}>
            <img src={profile} alt="profile" className="circle-profile"/>

            <button
                className="nav-toggle"
                aria-label={open ? 'Close menu' : 'Open menu'}
                onClick={() => setOpen((v) => !v)}
            >
                <span className="hamburger" />
            </button>

            <ul className="nav-menu">
                {SECTIONS.map((s) => (
                    <li key={s.id} className={active === s.id ? 'active' : ''}>
                        <button onClick={() => { scrollToSection(s.id); setOpen(false); }}>{s.label}</button>
                    </li>
                ))}
            </ul>

            <div className="nav-connect">
                <button className={active === 'contact-section' ? 'active' : ''} onClick={() => { scrollToSection('contact-section'); setOpen(false); }}>Contact</button>
            </div>
        </nav>
    );
}

export default Navbar;
