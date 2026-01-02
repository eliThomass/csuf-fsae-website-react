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

        {/* Large Sponsor Cards */}
        <div id="supporter-cards">
          
          <div className="sponsercard">
            <img src="/assets/images/supporters/haroldg.avif" alt="Harold G. Schaevitz Logo" />
            <p>The Sensor Connection, by Harold G. Schaevitz Industries, manufactures high-performance sensors and instrumentation. Their products measure temperature, motion, and displacement, serving automotive, industrial, and research markets with reliable, precision-engineered solutions that ensure accurate data collection and performance analysis.</p>
          </div>

          <div className="sponsercard">
            <img src="/assets/images/supporters/rapidharness.avif" alt="Rapid Harness Logo" />
            <p>Rapid Harness provides custom electrical harnesses and wiring solutions for diverse industries, including automotive, aerospace, and electronics. They emphasize quick turnaround, accuracy, and cost-effective production, helping clients meet technical requirements and accelerate projects with dependable wire harness assemblies.</p>
          </div>

          <div className="sponsercard">
            <img src="/assets/images/supporters/alpreprod.avif" alt="Aluminum Precision Logo" />
            <p>Aluminum Precision Products specializes in precision aluminum and titanium forging, machining, and finishing services. Their expertise supports aerospace, defense, and commercial industries, delivering high-strength, lightweight components with strict quality standards, innovation, and decades of manufacturing excellence.</p>
          </div>

          <div className="sponsercard">
            <img src="/assets/images/supporters/cropped-excanopy.avif" alt="Extreme Canopies Logo" />
            <p>Extreme Canopies designs and manufactures custom tents, banners, and promotional displays. Serving businesses, schools, and events worldwide, the company focuses on high-quality, durable products that enhance brand visibility through innovative designs and reliable outdoor solutions.</p>
          </div>

          <div className="sponsercard">
            <img src="/assets/images/supporters/axiom.avif" alt="Axiom Materials Logo" />
            <p>Axiom Materials focuses on advanced composite material solutions for aerospace, defense, and automotive industries. With expertise in thermoset and thermoplastic composites, they provide high-performance products that meet stringent quality standards, offering innovative solutions for complex engineering challenges.</p>
          </div>

          <div className="sponsercard">
            <img src="/assets/images/supporters/rbc.avif" alt="RBC Bearings Logo" />
            <p>RBC Bearings specializes in the design and manufacturing of high-precision bearings and engineered components, serving aerospace, defense, industrial, and medical markets. With a commitment to quality, innovation, and reliability, they deliver custom solutions for demanding applications.</p>
          </div>

          <div className="sponsercard">
            <img src="/assets/images/supporters/hexagon.avif" alt="Hexagon Engineering Logo" />
            <p>Hexagon Engineering is a leader in precision engineering services, offering cutting-edge solutions for aerospace, automotive, and robotics industries. With expertise in mechanical, electrical, and systems integration, they deliver customized, high-quality products to meet the unique needs of each client.</p>
          </div>

          <div className="sponsercard">
            <img src="/assets/images/supporters/vtfab.avif" alt="VTFabrication Logo" />
            <p>VTFabrication specializes in custom metal fabrication, welding, and machining services for the aerospace, defense, and automotive industries. Known for precision craftsmanship, they provide high-quality, innovative solutions for complex projects, ensuring excellence in design, fabrication, and delivery.</p>
          </div>

        </div>

        {/* Condensed Sponsor Logos */}
        <div id="sponserimagescondensed">
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
