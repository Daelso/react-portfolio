import React from 'react';
import pfp from '../../imgs/pfp.jpg'
import '../../styles/homepage.css'
import github from '../../imgs/github.png'
import linkedin from '../../imgs/linkedin.png'

export default function Home() {
  return (
    <div className="test">
      <h1>Home Page</h1>
      <p>
          Welcome to my page, my name is Chase Murtaugh. I am a Clemson graduate with a B.S. in Industrial and Organization Psychology. I recently completed a Full-Stack Web Development Course offered through the University of Pennsylvania. Check out some of my links below!
      </p>
	  <img className="test" 
      src={pfp}
	  alt= "My PFP"
	  />

<div class="footerWrap">
    <div class="footer">
      <div class="footerContent">
      <a className="links" href='https://github.com/Daelso'><img src={github} alt="Github"/></a>
      &nbsp;
      <a className="links" href='https://www.linkedin.com/in/chase-murtaugh-71ba82109/'><img src={linkedin} alt="LinkedIn"/></a>
      &nbsp;
      <a className="links" href='https://github.com/Daelso'><img src={github} alt="Github"/></a>
      &nbsp;
      </div>     
    </div>
</div>

    </div>
  );
}
