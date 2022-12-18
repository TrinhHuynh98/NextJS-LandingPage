import React from "react";
import {
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          {/* <section className="bg-gray-50 mt-10"> */}
          <div className="container mx-auto md:px-20 py-16 text-center">
            <h1 className="font-bold">Subscribe Newsletter</h1>

            <div className="py-4">
              <input
                type="text"
                className="shadow border rounded w-9/12 py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outlined"
                placeholder="Enter your email to subscribed"
              />
            </div>
            <button className="px-20 py-3 rounded-full text-white hover:scale-105 ease-in duration-300">
              Subscribe
            </button>
          </div>
          {/* </section> */}
          <p className="uppercase text-sm tracking-widest text-gray-600">{`Copy Right @2022`}</p>
          <p className="py-4 text-gray-600 m-auto">Term & Condition </p>
          {/* <div>
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
