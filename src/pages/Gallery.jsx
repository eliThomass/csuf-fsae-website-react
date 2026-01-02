import './Gallery.css';
import { Helmet } from 'react-helmet-async';

function Gallery() {
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
        <div id="gallery-years">
          
          {/* Titan XVIII */}
          <h2>Titan XVIII</h2>
          <div className="yearimages">
            <img src="/assets/images/gallery/xviii1.avif" alt="Titan XVIII car at career fair" />
            <img src="/assets/images/gallery/xviii2.avif" alt="Titan XVIII car at competition" />
          </div>

          {/* Titan XVII */}
          <h2>Titan XVII</h2>
          <div className="yearimages">
            <img src="/assets/images/gallery/titan XVII1.avif" alt="Titan XVII car on campus" />
            <img src="/assets/images/gallery/xvii2.avif" alt="Titan XVII car on track isometric" />
            <img src="/assets/images/gallery/xvii3.avif" alt="Titan XVII car on track far away shot" />
          </div>

          {/* Titan XVI */}
          <h2>Titan XVI</h2>
          <div className="yearimages">
            <img src="/assets/images/gallery/XVI1.avif" alt="Titan XVI car front facing" />
            <img src="/assets/images/gallery/xvi2.avif" alt="Titan XVI car with team" />
            <img src="/assets/images/gallery/xvi3.avif" alt="Titan XVI car at the front of the university" />
          </div>

          {/* Titan XIII */}
          <h2>Titan XIII</h2>
          <div className="yearimages">
            <img src="/assets/images/gallery/xiii.avif" alt="Titan XIII car near the engineering building" />
          </div>

          {/* Titan XII */}
          <h2>Titan XII</h2>
          <div className="yearimages">
            <img src="/assets/images/gallery/xii.avif" alt="Titan XII car at competition" />
          </div>

        </div>
      </div>

    </div>
  );
}

export default Gallery;
