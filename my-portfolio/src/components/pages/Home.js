import React from 'react';
import pfp from '../../imgs/pfp.jpg'
import '../../styles/homepage.css'
import github from '../../imgs/github.png'
import linkedin from '../../imgs/linkedin.png'
import resumeIcon from '../../imgs/resume.png'
import resumePDF from '../../imgs/resume.pdf'

export default function Home() {
  return (
    <div>
    <div className="test">
      <h1>Home Page</h1>
      <p>
          Welcome to my page, my name is Chase Murtaugh. I am a Clemson graduate with a B.S. in Industrial and Organization Psychology. I recently completed a Full-Stack Web Development Course offered through the University of Pennsylvania. Since starting on this path I have been eager to learn as much as possible about web development and programming. I look forward to improving my skills through online courses, books and future projects. 
          <br/>
          Check out some of my links below!
      </p>
	  <img className="test" 
      src={pfp}
	  alt= "My PFP"
	  />
    </div>
<div class="footerWrap">
    <div class="footer">
      <div class="footerContent">
      <a className="links" href='https://github.com/Daelso'><img src={github} alt="Github"/></a>
      &nbsp;
      <a className="links" href='https://www.linkedin.com/in/chase-murtaugh-71ba82109/'><img src={linkedin} alt="LinkedIn"/></a>
      &nbsp;
      <a className="links" target = "_blank" rel = "noreferrer" href={resumePDF}><img src={resumeIcon} alt="Resume"/></a>
      &nbsp;
      </div>     
    </div>
</div>

    </div>
  );
}
