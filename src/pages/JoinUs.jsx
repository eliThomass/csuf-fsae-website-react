import './JoinUs.css';

function JoinUs() {
  return (
    <div className="joinus-container">
      
      {/* Hero Section */}
      <div id="joinus-main-pic">
        <div 
          className="slidejoinus" 
          style={{ backgroundImage: "url('/assets/images/joinus/image.jpg')" }}
        >
          <p className="slidetextjoinus">Join Us</p>
        </div>
      </div>

      {/* Main Content */}
      <div id="joinus-pre-footer">
        <p id="welcome">Welcome to FSAE!</p>
        
        {/* The Welcome Image acts as a container for the text */}
        <div id="welcomeimg">
          <p id="welcometext">
            Below you will find the links to join the team. The right link includes an onboarding guide hosted in Notion.
            After completing the interest form please feel free to reach out to any of the respective directors/leads
            for guidance and to keep them informed on your onboarding process!
          </p>
        </div>

        {/* Action Buttons */}
        <div id="buttons">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdpEn7e23XTW4BYCYyLOwkAv8TkV8Z2sdU2iI9c_DlMzUgdZQ/viewform?pli=1" 
            className="button" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Interest Form
          </a>
          <a 
            href="https://csuffsae.notion.site/Onboarding-26c42f2bc4c980b8b9c7d00bbaa93dd7" 
            className="button" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Onboarding Info
          </a>
        </div>
      </div>

    </div>
  );
}

export default JoinUs;
