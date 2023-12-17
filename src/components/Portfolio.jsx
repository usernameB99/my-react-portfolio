import React from 'react'
import reactPortfolio from '../assets/portfolio/reactPortfolio.JPG'
import DgraphReactApp from '../assets/portfolio/DgraphReactApp.JPG'
import needs from '../assets/portfolio/needs.JPG'
import rpsExercise from '../assets/portfolio/rpsExercise.JPG'
import pkmn from '../assets/portfolio/pkmn.JPG'
import portfolioV1 from '../assets/portfolio/portfolioV1.JPG'


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            src: reactPortfolio,
            demoLink: 'https://google.com',
            codeLink: 'https://google.com',
        },
        {
            id: 2,
            src: needs,
            demoLink: 'https://google.com',
            codeLink: 'https://google.com',
        },
        {
            id: 3,
            src: DgraphReactApp,
            demoLink: 'https://google.com',
            codeLink: 'https://google.com',
        },
        {
            id: 4,
            src: rpsExercise,
            demoLink: 'https://google.com',
            codeLink: 'https://google.com',
        },
        {
            id: 5,
            src: pkmn,
            demoLink: 'https://google.com',
            codeLink: 'https://google.com',
        },
        {
            id: 6,
            src: portfolioV1,
            demoLink: 'https://google.com',
            codeLink: 'https://google.com',
        },
    ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen' >

            <div className="invisible h-16 md:h-24" aria-hidden="true"></div>

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work here</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            {
                portfolios.map(({id, src, demoLink, codeLink}) => (
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                    <div className='flex items-center justify-center'>
                        <button onClick={() => window.open(demoLink, '_blank')} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                        <button onClick={() => window.open(codeLink, '_blank')} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                    </div>
                </div>
                ))
            }

            </div>
        </div>

    </div>
  )
}

export default Portfolio