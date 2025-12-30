import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <div className="header-content">
                <img src="/assets/images/index/qt=q_95.avif" alt="CSUF Racing FSAE Logo" />

                <button 
                    className="menu-toggle" 
                    aria-label="Toggle navigation menu"
                    onClick={toggleMenu}
                >
                    &#9776;
                </button>

                <nav className={`inter-300 ${isMenuOpen ? 'show' : ''}`}>
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                    <Link to="/subteams" onClick={() => setIsMenuOpen(false)}>Subteams</Link>
                    <Link to="/join-us" onClick={() => setIsMenuOpen(false)}>Join Us</Link>
                    <Link to="/our-team" onClick={() => setIsMenuOpen(false)}>Our Team</Link>
                    <Link to="/supporters" onClick={() => setIsMenuOpen(false)}>Supporters</Link>
                    <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</Link>
                </nav>
            </div>
            <div className="belowheader"></div>
        </header>
    );
}

export default Header;
