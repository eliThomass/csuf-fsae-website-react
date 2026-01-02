import './Subteams.css';

function Subteams() {
  return (
    <div className="subteams-container">
      
      <div id="subteam-main-pic">
        <div 
          className="slidesubteam" 
          style={{ backgroundImage: "url('/assets/images/subteam/subteammainpic.jpg')" }}
        >
          <p className="slidetextsubteam">Subteams</p>
        </div>
      </div>

      <div id="subteam-cards">
        
	{ /* Powertrain */}
        <div 
          className="card" 
          style={{ backgroundImage: "url('/assets/images/subteam/powergrad.avif')" }}
        >
          <p className="cardhead">Powertrain</p>
          <p className="cardtext">
            The Powertrain subteam is responsible for everything mechanically related to power generation and delivery, ensuring the car's tractive system operates smoothly and efficiently. Our core components include the engine, which is the heart of the vehicle; the air intake, fuel system, and exhaust, which manage the engine's breathing and combustion; and the drivetrain, which delivers power to the wheels. We’re responsible for the design, fabrication, packaging, and structural integration of these systems, as well as the liquid cooling system for the engine. New members can look forward to diving into hands-on design, engine tuning, thermal management, and integration challenges to optimize our vehicle’s performance.
          </p>
        </div>

        {/* Chassis */}
        <div 
          className="card" 
          style={{ backgroundImage: "url('/assets/images/subteam/chasgrad.avif')" }}
        >
          <p className="cardhead">Chassis</p>
          <p className="cardtext">
            The Chassis subteam is responsible for designing and building the frame that serves as the foundation of the FSAE vehicle. Our primary objective is to protect both the driver and critical components while providing a solid interface for all other subteams’ subsystems. We adhere closely to FSAE regulations and collaborate with other groups to ensure seamless integration of their components. To validate our designs, we conduct Finite Element Analysis (FEA) to evaluate strength and torsional stiffness, which is a key indicator of chassis performance. We also carry out testing and validation procedures to guarantee safety and reliability. Finally, our subteam oversees the manufacturing process, using both in-house and external resources to produce a high-quality chassis.
          </p>
        </div>

        {/* Suspension */}
        <div 
          className="card" 
          style={{ backgroundImage: "url('/assets/images/subteam/suspgrad2.png')" }}
        >
          <p className="cardhead">Suspension</p>
          <p className="cardtext">
            The Suspension subteam is responsible for designing the physical suspension and steering systems of the car. They work closely with Vehicle Dynamics to hit performance targets and maximize handling. Suspension does extensive mass optimizations across all subsystems, while still ensuring the parts will withstand the loads produced from acceleration, cornering, and braking. The majority of suspension’s parts are machined in-house, which gives new members the opportunity to develop manufacturing skills and a better understanding of realistic design.
          </p>
        </div>

        {/* Aero */}
        <div 
          className="card" 
          style={{ backgroundImage: "url('/assets/images/subteam/aerograd.avif')" }}
        >
          <p className="cardhead">Aero</p>
          <p className="cardtext">
            The Aerodynamics subteam seeks to harness the capabilities of the air in order to increase downforce, decrease drag, and improve beneficial airflow such that our car sees large upgrades in performance through minor additions in mass. Our car features a complete aerodynamics package, including a front wing, rear wing, underbody, and bodywork. Each component is designed in CAD, validated through computational simulations, and manufactured in-house using carbon fiber layups. All of this design, manufacturing, testing, and eventual practical validation comes together to create a lightweight, carbon fiber aero kit capable of generating considerable downforce with minimized weight and maximum efficiency.
          </p>
        </div>

        {/* Vehicle Dynamics */}
        <div 
          className="card" 
          style={{ 
            backgroundImage: "url('/assets/images/subteam/vdgrad2-min.png')",
            backgroundPosition: "center 35%" 
          }}
        >
          <p className="cardhead">Vehicle Dynamics</p>
          <p className="cardtext">
            The vehicle dynamics subteam optimizes car performance by building and analyzing iterative vehicle models in collaboration with the suspension and chassis subteams. We bridge the gap between theory and practice, applying our models to real-world scenarios as race engineers. This involves hands-on testing, data acquisition, and vehicle tuning to validate our designs and find the optimal setup for competition.
          </p>
        </div>

        {/* Electrical */}
        <div 
          className="card" 
          style={{ 
            backgroundImage: "url('/assets/images/subteam/elecgrad.png')",
            backgroundPosition: "center 35%" 
          }}
        >
          <p className="cardhead">Electrical</p>
          <p className="cardtext">
            The Electrical subteam is tasked with the design, integration, and validation of the car's entire low-voltage electrical system. Our system is built around the custom-designed wiring harness, the "nervous system" that connects and manages all electronic components. Our key responsibilities include the integration of the Engine Control Unit (ECU), management of the power distribution module, and the implementation of a comprehensive data acquisition (DAQ) network. This network utilizes a full suite of sensors to monitor and log critical vehicle performance data. We also develop the complete driver interface, including the dashboard, steering wheel controls, and driver feedback systems. Our final focus is on rigorous bench testing and on-track validation to ensure the system is reliable, safe, and robust for competition.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Subteams;
