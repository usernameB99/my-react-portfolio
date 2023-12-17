import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white">

      <div className="invisible h-16 md:h-24" aria-hidden="true"></div>

      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className="text-xl mt-16 mb-8">
        The fascination for the world of information technology captivated me from the beginning. The diversity of programming languages and the endless 
        possibilities they offer exert an irresistible attraction on me. Solving complex problems through creative solutions is a special incentive for me, 
        and writing code in conjunction with logical thinking brings me great joy.        </p>


        <p className="text-xl">
        On my journey towards professional self-realization, I am seeking a position as an intern or employee in the field of web or application development. I 
        firmly believe that continuous learning and personal development are the keys to success in the dynamic IT industry. I am ready to take on new challenges 
        to expand my skills and gain valuable practical experience. I look forward to the opportunity to work in a professional environment where I can contribute my 
        skills and learn from experienced professionals. My goal is to make a positive contribution through hard work and dedication while expanding my knowledge 
        and abilities in this exciting field.        </p>
      </div>

    </div>
  );
};

export default About;
