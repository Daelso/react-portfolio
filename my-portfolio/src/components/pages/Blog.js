import React from 'react';
import Card from '../card';


const projects = [
  {
    name: 'Warhammer 40k SS13 Mod',
    description: 'A popular Space Station 13 mod that averages 80-100 concurrent players.',
    id: 1,
    link: "https://github.com/Daelso/Warhammer-IS12",
    pic: "https://daelso.github.io/my_portfolio/assets/images/40k.gif"
  },
  {
    name: 'Decked Out',
    description: 'A Quizlet-like appliation built using handlebars.',
    id: 2,
    link: "https://github.com/Daelso/Decked-Out",
    pic: 'https://raw.githubusercontent.com/Daelso/Decked-Out/main/public/images/DeckedOut_cards.png'
  },
  {
    name: 'Movie & Meal',
    description: 'A small web app using TMDB and Spoonacular APIs to generate a random movie and meal based off of your selected genre and cuisine.',
    id: 3,
    link: "https://github.com/Daelso/movie_meal",
    pic: "https://camo.githubusercontent.com/5239ac01c28e01e26b56b24f7dda3078cbcd8014320628f65a235c1b40d02487/68747470733a2f2f692e6779617a6f2e636f6d2f65336164643235663065393464643333373235653930393161323564643331392e706e67"
  },
  {
    name: 'Walter',
    description: 'Friend for life',
    id: 4,
    link: "https://github.com/Daelso/Warhammer-IS12"
  },
  {
    name: 'Walter',
    description: 'Friend for life',
    id: 5,
    link: "https://github.com/Daelso/Warhammer-IS12"
  },
  {
    name: 'Walter',
    description: 'Friend for life',
    id: 5,
    link: "https://github.com/Daelso/Warhammer-IS12"
  },
];

export default function Blog() {
  return (
    <div>
      <h1>My Portfolio</h1>
      <p>
      <div>
      {projects.map((demo) => (
        <Card name={demo.name} description={demo.description} key={demo.id} link={demo.link} pic={demo.pic} />
      ))}
    </div>
      </p>
    </div>
  );
}

