import './Supporters.css';
import { Helmet } from 'react-helmet-async';

function Supporters() {
  return (
    <div className="supporters-container">

      <Helmet>
        <title>Our Supporters | Titan Racing</title>
        <meta name="description" content="Titan Racing is powered by our generous supporters. We thank the companies and individuals who sponsor our CSUF Formula SAE team." />
      </Helmet>
      
      {/* Hero Section */}
      <div id="supporters-main-pic">
        <div className="slidesupporters">
          <p className="slidetextsupporters">Supporters</p>
        </div>
      </div>

      {/* Main Body */}
      <div id="supporters-body">
        <h2>A Special Thanks To...</h2>


        {/* Condensed Sponsor Logos */}
        <div id="sponserimagescondensed">
            
            <img src="/assets/images/supporters/haroldg.avif" alt="Harold G. Schaevitz Logo" />

            <img src="/assets/images/supporters/rapidharness.avif" alt="Rapid Harness Logo" />
      <img src="/assets/images/supporters/alpreprod.avif" alt="Aluminum Precision Logo" />

            <img src="/assets/images/supporters/cropped-excanopy.avif" alt="Extreme Canopies Logo" />

            <img src="/assets/images/supporters/axiom.avif" alt="Axiom Materials Logo" />

            <img src="/assets/images/supporters/rbc.avif" alt="RBC Bearings Logo" />

            <img src="/assets/images/supporters/hexagon.avif" alt="Hexagon Engineering Logo" />
            <img src="/assets/images/supporters/vtfab.avif" alt="VTFabrication Logo" />

          <img src="/assets/images/supporters/acco.avif" alt="ACCO Engineered Systems Logo" />

          <img src="/assets/images/supporters/walshmo.avif" alt="Walshmo Racing Logo" />
          <img src="/assets/images/supporters/hoosier.avif" alt="Hoosier Racing Tire Logo" />
          <img src="/assets/images/supporters/airtech.avif" alt="Airtech Logo" />
          <img src="/assets/images/supporters/gs.avif" alt="GS Logo" />
          <img src="/assets/images/supporters/calspan.png" style={{ height: '70px' }} alt="Calspan Logo" />
        </div>

      </div>
    </div>
  );
}

export default Supporters;
