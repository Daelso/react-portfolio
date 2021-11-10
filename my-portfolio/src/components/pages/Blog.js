import React from 'react';
import Card from '../card';
import github from '../../imgs/github.png'
import linkedin from '../../imgs/linkedin.png'
import resumeIcon from '../../imgs/resume.png'
import resumePDF from '../../imgs/resume.pdf'


const projects = [
  {
    name: 'Warhammer 40k SS13 Mod',
    description: 'A popular Space Station 13 mod that averages 80-100 concurrent players. There are numerous unique features, mechanics and gameplay loops to explore.',
    id: 1,
    link: "https://github.com/Daelso/Warhammer-IS12",
    pic: "https://daelso.github.io/my_portfolio/assets/images/40k.gif",
    deploymentLink: "http://www.byond.com/games/Exadv1/SpaceStation13"
  },
  {
    name: 'Decked Out',
    description: 'A Quizlet-like application built using handlebars. Users can create decks of flashcards and populate them with their own questions to study from later.',
    id: 2,
    link: "https://github.com/Daelso/Decked-Out",
    pic: 'https://raw.githubusercontent.com/Daelso/Decked-Out/main/public/images/DeckedOut_cards.png',
    deploymentLink: "http://www.byond.com/games/Exadv1/SpaceStation13"
  },
  {
    name: 'Movie & Meal',
    description: 'A small and simple web app using TMDB and Spoonacular APIs to generate a random movie and meal based off of your selected genre and cuisine. Gives a quick rundown of details about the movies/recipe and offers a link to the IMDB page as well as IMDB ratings to better filter out movies.',
    id: 3,
    link: "https://github.com/Daelso/movie_meal",
    pic: "https://camo.githubusercontent.com/5239ac01c28e01e26b56b24f7dda3078cbcd8014320628f65a235c1b40d02487/68747470733a2f2f692e6779617a6f2e636f6d2f65336164643235663065393464643333373235653930393161323564643331392e706e67",
    deploymentLink: "http://www.byond.com/games/Exadv1/SpaceStation13"
  },
  {
    name: 'Express.js Note Taker',
    description: 'A simple note/to-do manager built almost entirely using express.js. Has full CRUD functionality and utilizes localStorage to keep persistant notes.',
    id: 4,
    link: "https://github.com/Daelso/Express.js-Note-Taker",
    pic: "https://raw.githubusercontent.com/Daelso/Express.js-Note-Taker/main/demogif.gif",
    deploymentLink: "https://placid-plateau.herokuapp.com/"
  },
  {
    name: 'Sample Tech-Blog',
    description: 'A simple tech blog that allows users to create an account, log in, create, update and delete posts as well as comments.',
    id: 5,
    link: "https://github.com/Daelso/Tech_Blog_Practice",
    pic: "https://camo.githubusercontent.com/b9c841333cf43ab9d98b1b203cbd1161baa9f03b757567d6fd3cb525e1bc3b40/68747470733a2f2f692e6779617a6f2e636f6d2f34393365366339316564366430633736396566356464626666383834316535342e706e67",
    deploymentLink: "https://tech-blog-pennu.herokuapp.com/"
  },
  {
    name: 'Front-End Weather Dashboard',
    description: 'A simple front-end weather dashboard that allows a user to search their desired city and see the current weather as well as a 5-day forecast. Saves previous searches as clickable links for easier use.',
    id: 6,
    link: "https://github.com/Daelso/weather_tracker",
    pic: "https://camo.githubusercontent.com/062e70a14d77c0326db0556327782f262be2a3bc53e9e0d6eadd6d75c8678cea/68747470733a2f2f692e6779617a6f2e636f6d2f61303934376364656530356134303233386165383166356232346238303139312e706e67",
    deploymentLink: "https://daelso.github.io/weather_tracker/"
  }];

export default function Blog() {
  return (
    <div>
      <h1>My Portfolio</h1>
      <p>
      <div>
      {projects.map((demo) => (
        <Card name={demo.name} description={demo.description} key={demo.id} link={demo.link} pic={demo.pic} deploymentLink={demo.deploymentLink} />
      ))}
    </div>
      </p>
      <div class="footer">
      <div class="footerContent">
      <a className="links" href='https://github.com/Daelso' target = "_blank" rel = "noreferrer"><img src={github} alt="Github"/></a>
      &nbsp;
      <a className="links" href='https://www.linkedin.com/in/chase-murtaugh-71ba82109/' target = "_blank" rel = "noreferrer"><img src={linkedin} alt="LinkedIn"/></a>
      &nbsp;
      <a className="links" href={resumePDF} target = "_blank" rel = "noreferrer"><img src={resumeIcon} alt="Resume"/></a>
      &nbsp;
      </div>     
    </div>
</div>
  );
}

