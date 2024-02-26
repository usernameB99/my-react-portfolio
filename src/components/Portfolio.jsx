import React from "react";
import reactPortfolio from "../assets/portfolio/reactPortfolio.JPG";
import DgraphReactApp from "../assets/portfolio/DgraphReactApp.JPG";
import needs from "../assets/portfolio/needs.JPG";
import rpsExercise from "../assets/portfolio/rpsExercise.JPG";
import pkmn from "../assets/portfolio/pkmn.JPG";
import portfolioV1 from "../assets/portfolio/portfolioV1.JPG";
import jdbc from "../assets/portfolio/jdbc.JPG";
import LiquidCalculator from "../assets/portfolio/LiquidCalculator.jpg";
import invoiceGenerator from "../assets/portfolio/invoiceGenerator.jpg";
import inputSaver from "../assets/portfolio/inputSaver.jpg";
import addToCart from "../assets/portfolio/addToCart.jpg";
import minimalismBlog from "../assets/portfolio/minimalismBlog.jpg";
import cyberStore from "../assets/portfolio/cyberStore.jpg";
import spaceTravel from "../assets/portfolio/spaceTravel.jpg";
import apartmentSale from "../assets/portfolio/apartmentSale.jpg";
import Popup from './Popup';
import { useState } from "react";


const Portfolio = () => {

    const [popup, setPopup] = useState(false);


  const portfolios = [
    {
      id: 8,
      src: spaceTravel,
      demoLink: "https://usernameb99.github.io/space-travel-website/",
      codeLink: "https://github.com/usernameB99/space-travel-website",
      hoverText: "current project | css utility class, css variables, resposive web design"
    },
    {
      id: 9,
      src: cyberStore,
      demoLink: "https://usernameb99.github.io/cybershop/",
      codeLink: "https://github.com/usernameB99/cybershop",
      hoverText: "Designed a product page with ai gen. images | html, css, js"
    },
    {
      id: 10,
      src: minimalismBlog,
      demoLink: "https://usernameb99.github.io/minimalistic-minimalism-blog/",
      codeLink: "https://github.com/usernameB99/minimalistic-minimalism-blog",
      hoverText: "Designed & created my personal blog | topic: minimalism | html, css"
    },
    {
      id: 11,
      src: addToCart,
      demoLink: "https://add-to-cart-berni.netlify.app/",
      codeLink: "https://github.com/usernameB99/add-to-cart---firebase-app",
      hoverText: "Mobile Web App | Shopping List for me & Girlfriend | realtime Firebase database"
    },
    {
      id: 11,
      src: inputSaver,
      demoLink: "",
      codeLink: "https://github.com/usernameB99/browser-extension-leads-tracker",
      hoverText: "Browser Extension | Link Saver | save current tab & notes + delete | Local Storage"
    },
    {
      id: 11,
      src: apartmentSale,
      demoLink: "https://doyoutenerife.com/apartment-seaview-tosell/",
      codeLink: "https://wordpress.com/de/",
      hoverText: "used my eCommerce knowledge to create apartment sale pages | Wordpress"
    },
    {
      id: 12,
      src: LiquidCalculator,
      demoLink: "https://usernameb99.github.io/liquidCalculator/",
      codeLink: "https://github.com/usernameB99/liquidCalculator",
      hoverText: "My personal E-Liquid-Calculator for mixing my E-Liquids"
    },
    {
      id: 13,
      src: reactPortfolio,
      demoLink: "https://usernameb99.github.io/portfolio/",
      codeLink: "https://github.com/usernameB99/my-react-portfolio",
      hoverText: "Portfolio | React, Tailwind | Mobile Responsiove Web Design"
    },
    {
      id: 14,
      src: needs,
      demoLink: "",
      codeLink: "",
      hoverText: "The project I'm currently working on"
    },
    {
      id: 15,
      src: DgraphReactApp,
      demoLink: "https://usernameb99.github.io/dgraphTest",
      codeLink: "https://github.com/usernameB99/dgraphTest",
      hoverText: "Small frontend with graph databese connection i made for my presentation"
    },
    {
      id: 16,
      src: invoiceGenerator,
      demoLink: "https://usernameb99.github.io/Invoice_Generator/",
      codeLink: "https://github.com/usernameB99/Invoice_Generator",
      hoverText: "Invoice generator with JavaScript"
    },
    {
      id: 17,
      src: rpsExercise,
      demoLink: "https://usernameb99.github.io/RockPaperScissors/",
      codeLink: "https://github.com/usernameB99/RockPaperScissors",
      hoverText: "Rock paper scissors with JavaScript"
    },
    {
      id: 18,
      src: jdbc,
      demoLink: "https://github.com/usernameB99/JDBC",
      codeLink: "https://github.com/usernameB99/JDBC",
      hoverText: "Java personal management with dao classes & data base connection "
    },
    {
      id: 19,
      src: pkmn,
      demoLink: "https://github.com/usernameB99/Pokemon",
      codeLink: "https://github.com/usernameB99/Pokemon",
      hoverText: "Pokemon arena battle in Java with csv reader"
    },
    {
      id: 20,
      src: portfolioV1,
      demoLink: "https://usernameb99.github.io/first-portfolio/",
      codeLink: "https://github.com/usernameB99/usernameB99.github.io",
      hoverText: "My first portfolio"
    },
  ];

  const handleClick = (link) => {
    if(link){
        window.open(link, "_blank")
    } else{
        setPopup(true);
    }
  }

  return (

<>

    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
    >
      <div className="invisible h-16 md:h-24" aria-hidden="true"></div>

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink, hoverText }) => (
            <div
              title={hoverText}
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleClick(demoLink)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => handleClick(codeLink)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    {popup && <Popup onClose = {() => setPopup(false)} />}
    

    </>
  );
};

export default Portfolio;
