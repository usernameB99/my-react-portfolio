import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">

      <div className="invisible h-16 md:h-24" aria-hidden="true"></div>

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className="text-xl mt-8 mb-2">
        From my childhood on i was fascinated by design and colors. I always looked up to my father who is an artist and self employed graphic designer.</p>

        <p className="text-xl mt-2 mb-2">2020 i founded a company with my business partner. The company is focused on selling configurable sports equipment and accessories.
        During this time i've learned a lot about eCommerce, designing and creating an online shop, sales, marketing aswell as many other nescessary things to 
        operate a successful online business.</p>

        <p className="text-xl mt-2 mb-2">On my journey towards professional self-realization, I left the company at the end of 2022 to start my carreer as web developer.
        I really enjoyed my training as a full-stack software developer, and formed my mindset "that I can learn everything" that i need to be successful. <br />
        To be truly honest.. i kind of felt in love with it.</p>

        <p className="text-xl mt-2 mb-2">Web or software developement in general is some kind of art for me, so this is one of the places where i can release my full potential.
        With every line of code I write, with every graphic I design, with everything I implement, I learn, get better, grow and get step by step closer to make all my ideas come to live.</p>

        <p className="text-xl mt-2 mb-2">Besides coding I enjoy beeing outside in the nature, travelling, playing the guitar and sometimes play video games.
        Also hanging out with my friends who support me and also feel inspired and motivated from.</p>

{/*         <p className="text-xl mt-16 mb-8">
        The fascination for the world of information technology captivated me from the beginning. The diversity of programming languages and the endless 
        possibilities they offer exert an irresistible attraction on me. Solving complex problems through creative solutions is a special incentive for me, 
        and writing code in conjunction with logical thinking brings me great joy.        </p> */}

{/*         <p className="text-xl">
        On my journey towards professional self-realization, I am seeking a position as an intern or employee in the field of web or application development. I 
        firmly believe that continuous learning and personal development are the keys to success in the dynamic IT industry. I am ready to take on new challenges 
        to expand my skills and gain valuable practical experience. I look forward to the opportunity to work in a professional environment where I can contribute my 
        skills and learn from experienced professionals. My goal is to make a positive contribution through hard work and dedication while expanding my knowledge 
        and abilities in this exciting field.        </p> */}
      </div>

    </div>
  );
};

export default About;
