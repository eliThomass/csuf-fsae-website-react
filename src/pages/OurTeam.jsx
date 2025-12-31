import './OurTeam.css';

function OurTeam() {
  return (
    <div className="ourteam-container">
      
      <div id="ourteam-main-pic">
        <div className="slideourteam">
          <p className="slidetextourteam">Our Team</p>
        </div>
      </div>

      {/* Main Body */}
      <div id="ourteam-body">
        
        {/* Project Manager Section */}
        <h2 style={{ fontStyle: 'italic' }}>Project Manager</h2>
        <div className="imgcards">
          <div className="ourteamcard">
            <div className="imgframe">
              <img src="/assets/images/ourteam/projmanager.jpg" alt="Project Manager Haddi" />
            </div>
            <p 
              className="inter-300" 
              style={{ color: 'white', fontWeight: 500, fontSize: '20px', marginTop: '0px' }}
            >
              Haddi Almashat
            </p>
          </div>
        </div>

        {/* Team Leads Section */}
        <h2 style={{ fontStyle: 'italic' }}>Team Leads</h2>
        <div className="imgcards">
          
          {/* Chief Engineer */}
          <div className="ourteamcard">
            <div className="imgframe">
              <img src="/assets/images/ourteam/chiefeng.jpg" alt="Chief Engineer Tristin" />
            </div>
            <p 
              className="inter-300" 
              style={{ fontStyle: 'italic', color: 'white', fontSize: '20px', marginTop: '0px' }}
            >
              Chief Engineer
            </p>
            <p 
              className="inter-300" 
              style={{ color: 'white', fontWeight: 500, fontSize: '20px', marginTop: '0px' }}
            >
              Tristin Cioli
            </p>
          </div>

          {/* Powertrain */}
          <div className="ourteamcard">
            <div className="imgframe">
              <img src="/assets/images/ourteam/powerlead.jpg" alt="Powertrain Lead Kyle" />
            </div>
            <p 
              className="inter-300" 
              style={{ fontStyle: 'italic', color: 'white', fontSize: '20px', marginTop: '0px' }}
            >
              Powertrain
            </p>
            <p 
              className="inter-300" 
              style={{ color: 'white', fontWeight: 500, fontSize: '20px', marginTop: '0px' }}
            >
              Kyle Quintania
            </p>
          </div>

          {/* Chassis */}
          <div className="ourteamcard">
            <div className="imgframe">
              <img src="/assets/images/ourteam/chassislead.jpg" alt="Chassis Lead Andrew" />
            </div>
            <p 
              className="inter-300" 
              style={{ fontStyle: 'italic', color: 'white', fontSize: '20px', marginTop: '0px' }}
            >
              Chassis
            </p>
            <p 
              className="inter-300" 
              style={{ color: 'white', fontWeight: 500, fontSize: '20px', marginTop: '0px' }}
            >
              Andrew Kenton
            </p>
          </div>

          {/* Suspension */}
          <div className="ourteamcard">
            <div className="imgframe">
              <img src="/assets/images/ourteam/suspensionlead.jpg" alt="Suspension Lead Luis" />
            </div>
            <p 
              className="inter-300" 
              style={{ fontStyle: 'italic', color: 'white', fontSize: '20px', marginTop: '0px' }}
            >
              Suspension
            </p>
            <p 
              className="inter-300" 
              style={{ color: 'white', fontWeight: 'bold', fontSize: '20px', marginTop: '0px' }}
            >
              Luis Cornejo
            </p>
          </div>

          {/* Aero */}
          <div className="ourteamcard">
            <div className="imgframe">
              <img src="/assets/images/ourteam/aerolead.jpg" alt="Aero Lead Garrett" />
            </div>
            <p 
              className="inter-300" 
              style={{ fontStyle: 'italic', color: 'white', fontSize: '20px', marginTop: '0px' }}
            >
              Aero
            </p>
            <p 
              className="inter-300" 
              style={{ color: 'white', fontWeight: 500, fontSize: '20px', marginTop: '0px' }}
            >
              Garrett Munger
            </p>
          </div>

          {/* Vehicle Dynamics */}
          <div className="ourteamcard">
            <div className="imgframe">
              <img src="/assets/images/ourteam/vdlead.jpg" alt="Vehicle Dynamics Lead Jaren" />
            </div>
            <p 
              className="inter-300" 
              style={{ fontStyle: 'italic', color: 'white', fontSize: '20px', marginTop: '0px' }}
            >
              Vehicle Dynamics
            </p>
            <p 
              className="inter-300" 
              style={{ color: 'white', fontWeight: 500, fontSize: '20px', marginTop: '0px' }}
            >
              Jared Warren
            </p>
          </div>

          {/* Electrical */}
          <div className="ourteamcard">
            <div className="imgframe">
              <img src="/assets/images/ourteam/eleclead.jpg" alt="Electrical Lead Eddy" />
            </div>
            <p 
              className="inter-300" 
              style={{ fontStyle: 'italic', color: 'white', fontSize: '20px', marginTop: '0px' }}
            >
              Electrical
            </p>
            <p 
              className="inter-300" 
              style={{ color: 'white', fontWeight: 500, fontSize: '20px', marginTop: '0px' }}
            >
              Eddy Suarez
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default OurTeam;
