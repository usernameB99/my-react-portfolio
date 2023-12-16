import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>

        <p className="text-xl mt-20">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, inventore. Officia molestias distinctio nam nostrum praesentium perferendis omnis ad deleniti, odit dignissimos dolorum quasi quod commodi possimus sed ut voluptas sint ab excepturi? Nesciunt eum cumque est, necessitatibus eaque quas dolor officiis ullam. Qui cupiditate harum delectus eius soluta excepturi.
        </p>

        <br /> {/* abstand between text not working and idk why xD */}

        <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae, esse sapiente culpa debitis quidem cupiditate odit voluptatem illum. Quasi sint excepturi accusamus magnam consequatur. Asperiores blanditiis aut quo maiores. Voluptas est, amet hic delectus consequuntur aperiam illum, ipsum voluptate natus dolor quidem ipsam sint facere ad ipsa autem eaque.
        </p>
      </div>

    </div>
  );
};

export default About;
