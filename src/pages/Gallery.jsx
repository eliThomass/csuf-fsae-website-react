import './Gallery.css';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

// Number 20 is 2013-2014
// Number 45 is 2012-2013

// Titan VI doesn't exist / never used. Could not find photos.
//
// Ignore filenames, they don't relate to the car year.
// I had to move around the photos to try and match the year so filenames
// don't mean much.

const galleryData = [
  {
    year: "Titan III", //
    images: [
      { src: "/assets/images/gallery/vi4.avif", alt: "Titan III with the team" }
    ]
  },
    {
    year: "Titan IV", // 2011-2012 (Confirmed Pictures)
    images: [
      { src: "/assets/images/gallery/iv3.avif", alt: "Titan IV car at campus" },
      { src: "/assets/images/gallery/iv4.avif", alt: "Titan IV car at campus" },
      { src: "/assets/images/gallery/iv.avif", alt: "Titan IV car at campus again" },
      { src: "/assets/images/gallery/vi5.avif", alt: "Titan IV car at campus" },
    ]
  },
  {
    year: "Titan V", // 2012-2013
    images: [
      { src: "/assets/images/gallery/vi3.avif", alt: "Titan VI car at competition" },
      { src: "/assets/images/gallery/vi2.avif", alt: "Titan VI car at competition" },
    ]
  }, 
  {
    year: "Titan VII", // 2013-2014 (Confirmed, 2014 = VII)
    images: [
      { src: "/assets/images/gallery/vii.avif", alt: "Titan VII car at competition" },
      { src: "/assets/images/gallery/vii2.avif", alt: "Titan VII testing at a parking lot" },
    ]
  },
  {
    year: "Titan IX", // 2015-2016
    images: [
      { src: "/assets/images/gallery/ix.avif", alt: "Titan IX car at competition" },
      { src: "/assets/images/gallery/ix2.avif", alt: "Titan IX in front of the trailer" }, 
      { src: "/assets/images/gallery/ix3.avif", alt: "Titan IX from the backside"} 
    ]
  },
  {
    year: "Titan XI", //
    images: [
      { src: "/assets/images/gallery/xii.avif", alt: "titan xi car at competition" }
    ]
  },
  {
    year: "Titan XII", // 2018-2019 (Confirmed, XII)
    carYear: "2019",
    images: [
      { src: "/assets/images/gallery/xiii.avif", alt: "Titan XII car near the engineering building" },
      { src: "/assets/images/gallery/xii3.avif", alt: "Titan XII car after competition" },
      { src: "/assets/images/gallery/xii42.avif", alt: "Titan XII car after competition" }
    ]
  },
  {
    year: "Titan XV", // 2022
    carYear: "2022",
    images: [
      { src: "/assets/images/gallery/XV1.avif", alt: "Titan XV car front facing" },
      { src: "/assets/images/gallery/xv2.avif", alt: "Titan XV car with team" },
      { src: "/assets/images/gallery/xv3.avif", alt: "Titan XV car at the front of the university" }
    ]
  },
  {
    year: "Titan XVI", // 2023 
    carYear: "2023",
   images: [
      { src: "/assets/images/gallery/titan XVI1.avif", alt: "Titan XVII car on campus" },
      { src: "/assets/images/gallery/xvi2.avif", alt: "Titan XVII car on track isometric" },
      { src: "/assets/images/gallery/xvi3.avif", alt: "Titan XVII car on track far away shot" }
    ]
  },
  {
    year: "Titan XVII", // 2024
    carYear: "2024",
    images: [
      { src: "/assets/images/gallery/xvii.avif", alt: "Titan XVII car racing past with a blur at comp" },
      { src: "/assets/images/gallery/xvii2.avif", alt: "Titan XVII car in front of some grass" },
      { src: "/assets/images/gallery/xvii3.avif", alt: "Titan XVII car on track far away shot" }
    ]
  },
  {
    year: "Titan XVIII", // 2025
    carYear: "2025",
    images: [
      { src: "/assets/images/gallery/xviii1.avif", alt: "Titan XVIII car at career fair" },
      { src: "/assets/images/gallery/xviii2.avif", alt: "Titan XVIII car at competition" },
      { src: "/assets/images/gallery/xviii3.avif", alt: "Titan XVIII car after competition with the driver" },
      { src: "/assets/images/gallery/xviii4.avif", alt: "Titan XVIII car rolling out" },
      { src: "/assets/images/gallery/xviii5.avif", alt: "Titan XVIII car at comp" },
    ]
  }
];

function Gallery() {
    const [currentIndex, setCurrentIndex] = useState(10);

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

      <div className="car-year"> {/* Put info for the car year here (2025, 2024, etc.)*/}
        <h3>{currentData.carYear}</h3>
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
