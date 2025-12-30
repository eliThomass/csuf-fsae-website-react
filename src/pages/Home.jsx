import { useState, useEffect } from 'react';
import '../App.css';
import './Home.css';


function Home() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const slides = [
        "assets/images/index/rs=w_2320h_1547 (1)comp.jpg",
        "assets/images/index/xvii.jpg",
        "assets/images/index/veQNwAug.png",
        "assets/images/index/Photo Sep 18 2024 4 50 10 PM (1)_edited_edited-min.png",
        "assets/images/index/croppeddsc0999-min.png"
    ];

    // Automatic slideshow logic
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 6000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="home-container">
            {/* Slideshow Section */}
            <div id="slideshow">
                {slides.map((image, index) => (
                    <div 
                        key={index}
                        className={`slide ${index === currentSlideIndex ? 'active-slide' : ''}`}
                        style={{ backgroundImage: `url('${image}')` }}
                    >
                        <p className="slidetext">Titan Racing</p>
                    </div>
                ))}
            </div>

            {/* About Us Section */}
            <div className="aboutus">
                <p id="aboutustext">About Us</p>
                <div className="team">
                    <p className="teamdesc">
                        We are Cal State Fullerton's Formula SAE Team. Every year we design, build, and test a Formula-style racecar to compete at the Formula SAE Collegiate Design Series.
                        FSAE allows us to gain hands-on practical experience and an opportunity to apply the engineering disciplines we've learned throughout our academic careers at CSUF.
                    </p>
                </div>
                
                {/* Video Showcase Section */}
                <div className="showcasevideos">
                    <div className="scwrapper">
                        <img src="assets/images/index/RPReplay_Final1755087171.gif" className="scvid" alt="Black and white aerodynamics GIF" />
                    </div>
                    <div className="scwrapper">
                        <img src="assets/images/index/RPReplay_Final1755087082.gif" className="scvid" alt="Color GIF of FSAE car accelerating" />
                    </div>
                    <div className="scwrapper">
                        <img src="assets/images/index/RPReplay_Final1755087226.gif" className="scvid" alt="Black and white GIF of FSAE car racing on track" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
