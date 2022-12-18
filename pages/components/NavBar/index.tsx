import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "../../../public/assets/sample-logo.png";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {
  FaLinkedinIn,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);
  return (
    <div>
      <div
        className={
          shadow
            ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
            : "fixed w-full h-20 z-[100]"
        }
      >
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <Link href={"/"} legacyBehavior>
            <a>
              <Image
                src={Logo}
                alt="/"
                width={50}
                height={35}
                className="cursor-pointer"
              />
            </a>
          </Link>
          <div>
            <ul className="hidden md:flex">
              <li className="ml-10 text-sm uppercase hover:border-b">
                <Link href={"/#home"}>Home</Link>
              </li>
              <li className="ml-10 text-sm uppercase hover:border-b">
                <Link href={"/#about"}>About</Link>
              </li>
              <li className="ml-10 text-sm uppercase hover:border-b">
                <Link href={"/#skills"}>Skill</Link>
              </li>
              <li className="ml-10 text-sm uppercase hover:border-b">
                <Link href={"/#projects"}>Project</Link>
              </li>
              <li className="ml-10 text-sm uppercase hover:border-b">
                <Link href={"/"}>Contact</Link>
              </li>
            </ul>

            <div className="md:hidden">
              <AiOutlineMenu onClick={handleNav} size={25} />
            </div>
          </div>
        </div>

        {/* mobile design */}
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          <div
            className={
              nav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10  ease-in duration-500"
            }
          >
            <div>
              <div className="flex justify-between w-full items-center">
                <Link href={"/"} legacyBehavior>
                  <a>
                    <Image
                      src={Logo}
                      alt="/"
                      width={50}
                      height={35}
                      className="cursor-pointer"
                    />
                  </a>
                </Link>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineClose onClick={handleNav} />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4">{`let's build something legendary together`}</p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href={"/"}>
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Home
                  </li>
                </Link>
                <Link href={"/#about"}>
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    About
                  </li>
                </Link>
                <Link href={"/#skills"}>
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Skills
                  </li>
                </Link>
                <Link href={"/#projects"}>
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Projects
                  </li>
                </Link>
                <Link href={"/#contact"}>
                  <li onClick={() => setNav(false)} className="py-4 text-sm">
                    Contact
                  </li>
                </Link>
              </ul>

              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#5651e5]">{`Let's Connect`}</p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
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
      </div>
    </div>
  );
};

export default Navbar;
