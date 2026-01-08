import './Gallery.css';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';


const galleryData = [
  {
    year: "Titan XII",
    images: [
      { src: "/assets/images/gallery/xii.avif", alt: "Titan XII car at competition" }
    ]
  },
  {
    year: "Titan XIII",
    images: [
      { src: "/assets/images/gallery/xiii.avif", alt: "Titan XIII car near the engineering building" }
    ]
  },
  {
    year: "Titan XVI",
    images: [
      { src: "/assets/images/gallery/XVI1.avif", alt: "Titan XVI car front facing" },
      { src: "/assets/images/gallery/xvi2.avif", alt: "Titan XVI car with team" },
      { src: "/assets/images/gallery/xvi3.avif", alt: "Titan XVI car at the front of the university" }
    ]
  },
  {
    year: "Titan XVII",
    images: [
      { src: "/assets/images/gallery/titan XVII1.avif", alt: "Titan XVII car on campus" },
      { src: "/assets/images/gallery/xvii2.avif", alt: "Titan XVII car on track isometric" },
      { src: "/assets/images/gallery/xvii3.avif", alt: "Titan XVII car on track far away shot" }
    ]
  },
  {
    year: "Titan XVIII",
    images: [
      { src: "/assets/images/gallery/xviii1.avif", alt: "Titan XVIII car at career fair" },
      { src: "/assets/images/gallery/xviii2.avif", alt: "Titan XVIII car at competition" }
    ]
  }
];

function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(4);

    const nextYear = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryData.length);
    };
    const prevYear = () => {
        setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? galleryData.length - 1 : prevIndex - 1
        );
    };

     const currentData = galleryData[currentIndex];
  return (
    <div className="gallery-container">

      <Helmet>
        <title>Gallery | Titan Racing</title>
        <meta name="description" content="Explore the Titan Racing photo and video gallery. See our CSUF Formula SAE car in action, as well as previous models." />
      </Helmet>
      
      <div id="gallery-main-pic">
        <div className="slidegallery">
          <p className="slidetextgallery">Gallery</p>
        </div>
      </div>

      {/* Main Body */}
      <div id="gallery-body">
        <div className="gallery-controls">
          <button onClick={prevYear} className="arrow-btn" aria-label="Previous Year">
            &#10094; {/* Left Arrow Character */}
          </button>
          
          <h2>{currentData.year}</h2>
          
          <button onClick={nextYear} className="arrow-btn" aria-label="Next Year">
            &#10095; {/* Right Arrow Character */}
          </button>
        </div>

        {/* Dynamic Image Grid */}
        <div className="yearimages" key={currentIndex}> 
          {currentData.images.map((img, index) => (
            <img 
              key={index} 
              src={img.src} 
              alt={img.alt} 
            />
          ))}
        </div>
      </div>

    </div>
  );
}

export default Gallery;
