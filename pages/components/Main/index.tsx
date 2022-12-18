import React from "react";
import {
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-between items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">{`Let's build something together`}</p>
          <h1 className="py-4 text-gray-700">
            Hi, I am <span className="text-[#5651e5]">Josly</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            Hi, I have recently been working as a Front end Developer. Extensive
            knowledge of the Front end of a completed web application. Because
            of this, I am able to adapt the business requirements to meet the
            technical demands. My main goal is to give you the best service
            possible, and I know a lot about many different fields, such as
            e-commerce, real estate, health care, and so on.
          </p>
          <div>
            <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
              <a href="/" target="_blank" rel="noreferrer">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaFacebook />
                </div>
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaInstagram />
                </div>
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaTwitter />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
