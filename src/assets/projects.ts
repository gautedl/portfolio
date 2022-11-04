import whereswaldo from '../images/whereswaldo.png'
import webshop from '../images/webshop.png'
import cvbuilder from '../images/cvbuilder.png'
import battleship from '../images/battleship.png'

const projects: {title: string, description:string, github: string, website:string, img:string, alt:string}[] = [
    {
        title : "Where's Waldo",
        description: "Fullstack application with a leaderboard and server side validation built with React and Firebase.",
        github: "https://github.com/gautedl/find-Waldo",
        website: "https://gautedl.github.io/find-Waldo",
        img: whereswaldo,
        alt: "Where's waldo"
    } ,
    {
        title: "Web Shop",
        description: "Frontend of a web shop for my personal print store. Not yet integrated with backend and payment. Built with focus on responsive design.",
        github: "https://github.com/gautedl/shopping-cart",
        website: "https://gautedl.github.io/shopping-cart/",
        img: webshop,
        alt: "Web Shop"
    },
    {
        title: "Build a CV",
        description: "An application to make building a cv easier. Import an image, create sections, and edit on double clicking. When done export to a pdf.",
        github: "https://github.com/gautedl/cv-project",
        website: "http://gautedl.github.io/cv-project",
        img: cvbuilder,
        alt: "CV builder"
    },
    {
        title: "Battleship",
        description: "The classic battleship game. Built with JS and tested with Jest.",
        github: "https://github.com/gautedl/Battleship",
        website: "",
        img: battleship,
        alt: "Battleship"
    }
]



export {projects}