import self from '../img/self.png';
import mock1 from '../img/mock1.png';
import mock2 from '../img/mock2.png';
import mock3 from '../img/mock3.png';
import cv from '../img/cv.pdf';

export let colors = ['rgb(0,255,164)', 'rgb(166,104,255)'];

export const info = {
  firstName: 'Nick',
  lastName: 'Walton',
  initials: 'NW',
  position: 'a Full Stack Engineer',
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: '🌎',
      text: 'Based in the Wellington, NZ',
    },
    {
      emoji: '💼',
      text: 'Fullstack Engineer',
    },
    {
      emoji: '📧',
      text: 'nick@waltonit.dev',
    },
  ],
  socials: [
    {
      link: 'https://github.com/Nick6464',
      icon: 'fa fa-github',
      label: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/nick-walton-1a474b173/',
      icon: 'fa fa-linkedin',
      label: 'linkedin',
    },
    //Make the cv link open the cv in a new tab
    {
      link: cv,
      icon: 'fa fa-file',
      label: 'cv',
    },
  ],
  bio: "Hello! I'm Nick. I'm a Fullstack Engineer at Liquid IT. I've been using code to improve my life and the lives of others since I was 11. I'm passionate about using code to solve problems and make life easier. I'm a big fan of React and Node.js, and I'm always looking to learn new things.",
  skills: {
    proficientWith: [
      'javascript',
      'react',
      'git',
      'github',
      'html5',
      'css3',
      'sql',
      'postgres',
      'azure',
      'python',
    ],
    exposedTo: [
      'aws',
      'c#',
      'java',
      'c++',
      'c',
      'php',
      'docker',
      'powershell',
      'terraform',
    ],
  },
  hobbies: [
    {
      label: 'plants and tissue culture',
      emoji: '🪴',
    },
    {
      label: 'ctf competitions',
      emoji: '🛡️',
    },
    {
      label: 'dungeons and dragons',
      emoji: '🐉',
    },
    {
      label: '3d printing',
      emoji: '🖨️',
    },
    {
      label: 'gaming',
      emoji: '🎮',
    },
    {
      label: 'surfing',
      emoji: '🏄',
    },
  ],
  portfolio: [
    {
      title: 'GaragePi',
      live: 'https://www.garagepi.site',
      source: 'https://github.com/Nick6464/garagepi-frontend',
      image: mock1,
    },
    {
      title: 'Minecraft Hardcore Tracker',
      source: 'https://github.com/Nick6464/Nicks-Hardcore',
      image: mock2,
    },
    {
      title: 'Portfolio',
      live: 'https://www.waltonit.dev',
      source: 'https://github.com/Nick6464/Portfolio',
      image: mock3,
    },
  ],
};
