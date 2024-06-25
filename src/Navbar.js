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
          window.addEventListener("wheel", () => { //sometimes you have to listen for wheel and not scroll
            console.log(window.scrollY);
            setSmall(window.scrollY > 0);
          }, true);
        }
      }, []);


    return (
        <nav className="navbar">
             <header className={`"" ${small ? "sticky" : ""}`}>
                <a href="#" className="logo">Logo</a>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Experience</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </header>
            <section className="banner"></section>
        </nav>
    );
}
 
export default Navbar;
