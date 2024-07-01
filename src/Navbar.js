import React, { useEffect, useState  } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  
    const [small, setSmall] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const options = { passive: true }; // options must match add/remove event
            const scroll = (event) => {
            const { scrollY } = window;
            console.log( 'scrollY', scrollY)
         };
          window.addEventListener("scroll", () => { //sometimes you have to listen for wheel and not scroll
            console.log(window.scrollY);
            setSmall(window.scrollY > 0 );
          }, true);
        }
      }, []);


    return (
        <nav className="navbar">
             <header className={`"" ${small ? "sticky" : ""}`}>
                <a href="#" className="logo">JM</a>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </header>
            <section className="banner"></section>
        </nav>
    );
}
 
export default Navbar;
