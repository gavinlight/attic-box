import * as i from 'types';

import CollinImage from 'images/media/team/collin.jpg';
import TomImage from 'images/media/team/tom.jpg';
import BrianImage from 'images/media/team/brian.jpg';
import GavinImage from 'images/media/team/gavin.jpg';
import DannyImage from 'images/media/team/danny.jpg';
import AliImage from 'images/media/team/ali.jpg';
import JimmyImage from 'images/media/team/jimmy.jpg';
import NickImage from 'images/media/team/nick.jpg';
import KingImage from 'images/media/team/king.jpg';

export const TeamContent: i.TeamMemberType[] = [
  {
    id: 1,
    name: 'Collin Wu',
    function: 'Co-founder / Game Designer',
    image: CollinImage,
    content: 'Hi, I am Collin, one of the founders of Attic Box Studio. I help with the development of map design, layout, gameplay as well as writing and implementing the story. I manage the overall flow of the game and design the player’s journey to keep it engaging from begin to end. <br /><br />Next to this, I handle all the business related matters of the company. I am working as a data analyst at Goedemensen and currently stationed at Advanced Programs as an application developer.',
    urls: {
      email: 'collinwu@atticboxstudio.com',
      linkedIn: 'https://www.linkedin.com/in/collin-wu-94920371/',
    },
  },
  {
    id: 2,
    name: 'Danny Nguyen',
    function: 'Co-founder / Game Designer',
    image: DannyImage,
    content: 'My name is Danny Nguyen and I’m lead game designer of Seek. My task is to design the player’s overall experience of the game. Things like creating idea\'s for gameplay, game mechanics, storyline, map design and UX design are all part of the daily routine. The most important part is to communicate them to the rest of the team. This is a back and forth process to ensure the quality of the game.',
    urls: {
      email: 'dannynguyen@atticboxstudio.com',
      website: 'www.danyynguyen.nl',
    },
  },
  {
    id: 3,
    name: 'Tom Verkerk',
    function: 'Co-founder / Game Developer',
    image: TomImage,
    content: 'As developer of the game I fulfill a wide spectrum of tasks, varying from level design, or programming of user interface, to video editing movies, making up loading hints, and everything in between.<br/ ><br/ >While working on Seek, I\'ve also managed to finish a study in game development, and currently I\'m working on approval of casino games, with Seek as my main spare time project.',
  },
  {
    id: 4,
    name: 'Ali Chughtai',
    function: '3D Artist',
    image: AliImage,
    content: 'My name is Ali Chughtai, Lead 3D Artist at Attic box Studio since 2016. I graduated from the course Animation in april of 2017. I make 3D models for the game Seek, from simple objects to creatures. I\'ve come in contact with Attic Box Studio through a music video animation I made for a well known dubstep artist Code:pandorum and they approached me for my work.',
    urls: {
      email: 'aliaftabchughtai@gmail.com',
      instagram: 'https://www.instagram.com/thatboyali',
      facebook: [
        'https://www.facebook.com/alifirenzejackson',
        'https://www.facebook.com/Alimation-1594214534165641',
        'https://www.facebook.com/BootyAndBass/?modal=admin_todo_tour',
      ],
      soundcloud: 'https://soundcloud.com/bootycase',
      mixcloud: 'https://www.mixcloud.com/ali-firenze-jackson/',
      youtube: 'https://www.youtube.com/channel/UCpFCOFsr78Kz8oT-OI-gYvA?view_as=subscriber',
    },
  },
  {
    id: 5,
    name: 'Jimmy Nijs',
    function: 'Concept Artist',
    image: JimmyImage,
    content: 'Hello, I am Jimmy Nijs, the concept artist at Attic Box Studio. I’ve graduated at the Grafisch Lyceum Rotterdam with a Game Art diploma in 2015, and ever since I’ve been hard at work with freelance illustrating – from children’s books to D&D manuals – and building my portfolio.',
    urls: {
      email: 'jimmy_nijs@hotmail.nl',
      website: 'www.jimmynijs-art.nl',
      deviantArt: 'https://www.deviantart.com/jimmynijs',
      instagram: 'https://www.instagram.com/jimmynijs/',
      facebook: 'https://www.facebook.com/JimmyNijsArt/',
    },
  },
  {
    id: 6,
    name: 'King Shaw',
    function: '3D Artist',
    image: KingImage,
    content: 'I am a passionate 3D modeler and artist looking to help make ideals a reality by using visuals. Blender is my poison of choice not social media.',
    urls: {
      email: 'kingshawnichols@gmail.com',
    },
  },
  {
    id: 7,
    name: 'Brian Harman',
    function: 'Composer / Sound Designer',
    image: BrianImage,
    content: 'My name is Brian Harman, composer and sound designer at Attic Box Studio. I produce all the sounds for Seek since 2013. I follow the course E-music at the Conservatory in Haarlem and have made music for over more than 11 years. Although a lot of my work is focused on the field of producing music, my passion lies in the creation of sounds for the media (films/games/advertisements).',
    urls: {
      website: 'https://www.brianharman.nl/',
      facebook: 'https://www.facebook.com/brian.harman.75',
      instagram: 'https://www.instagram.com/setupwizardmusic/?hl=nl',
      soundcloud: 'https://soundcloud.com/setupwizardmusic',
    },
  },
  {
    id: 8,
    name: 'Gavin Ligthart',
    function: 'Digital Brand Manager',
    image: GavinImage,
    content: 'My name is Gavin Ligthart, digital brand manager, webdeveloper and consultant at Attic Box Studio. I\'ve been helping Attic Box with everything regarding to brand, website and design since 2014. I\'m currently working as a frontend developer at Label A in Amsterdam.',
    urls: {
      email: 'gavin.ligthart@gmail.com',
      linkedIn: 'https://www.linkedin.com/in/gavinligthart/',
    },
  },
  {
    id: 9,
    name: 'Nick van Unen',
    function: 'Assistant Story Development',
    image: NickImage,
    content: 'My name is Nick van Unen, i follow the course Computer Science at the State university Groningen and work as a webdeveloper.<br /><br />I help developing the storyline for Seek at Attic Box Studio by exploring and enriching the story in the game. This means creating notes that tells the story in Seek.',
    urls: {
      email: 'n_van_unen@hotmail.com',
      linkedIn: 'https://www.linkedin.com/in/nick-van-unen-31b45311b/',
      facebook: 'https://www.facebook.com/nick.vanunen',
    },
  },
];
