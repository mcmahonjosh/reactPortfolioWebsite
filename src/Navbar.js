import React, { useEffect, useState  } from "react";
import resumePdf from "./img/Joshua_McMahon_Resume_3_20_26G.pdf";

const Navbar = () => {
  
    const [small, setSmall] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleScroll = () => { //sometimes you have to listen for wheel and not scroll
            console.log(window.scrollY);
            setSmall(window.scrollY > 0 );
         };
          window.addEventListener("scroll", handleScroll, { passive: true }); // options must match add/remove event

          return () => {
            window.removeEventListener("scroll", handleScroll);
          };
        }
      }, []);


    return (
        <nav className="navbar">
             <header className={`"" ${small ? "sticky" : ""}`}>
                <a href="#home" className="logo">JM</a>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href={resumePdf} target="_blank" rel="noopener noreferrer">Resume</a></li>
                </ul>
            </header>
            <section className="banner"></section>
        </nav>
    );
}
 
export default Navbar;