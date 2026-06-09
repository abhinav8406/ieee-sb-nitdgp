import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import "../styles/Navbar.css";

function Navbar(){
    const [visible, setVisible] = useState(true);

    useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show near top
      if (currentScrollY < 80) {
        setVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      // Show when scrolling up
      if (currentScrollY < lastScrollY) {
        setVisible(true);
      }

      // Hide when scrolling down
      else {
        setVisible(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
    return(
        <>
            <nav    className={`navbar 
                                navbar-dark 
                                navbar-expand-sm 
                                sticky-top py-0 
                                ${visible ? "show-nav" : "hide-nav"}`}
                    style={{backgroundColor:"#001f5c"}}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img    className="mb-1"
                                alt="ieee_logo"
                                src="https://www.ieee-nitdgp.in/_next/image?url=%2Fieeesb_logo_white.png&w=750&q=75"
                                style={{width:"100px",
                                        }}>
                        </img>
                    </Link>
                    <button className="navbar-toggler" 
                            type="button" data-bs-toggle="collapse" 
                            data-bs-target="#navbarTogglerDemo01" 
                            aria-controls="navbarTogglerDemo01" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav">
                            <li className="nav-item px-3 fw-bold">
                                <a  href="https://www.ieee.org" 
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    title="Goes to IEEE"
                                    className="nav-link-custom"
                                >About IEEE7</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item px-3 fw-bold">
                                <Link className="nav-link-custom" to="/">Home</Link>
                            </li>
                            <li className="nav-item px-3 fw-bold">
                                <Link className="nav-link-custom" to="/About">About Us</Link>
                            </li>
                            <li className="nav-item px-3 fw-bold">
                                <Link className="nav-link-custom" to="/Event">Event</Link>
                            </li>
                            <li className="nav-item px-3 fw-bold">
                                <Link className="nav-link-custom" to="/Team">Team</Link>
                            </li>
                            <li className="nav-item px-3 fw-bold" >
                                <Link className="nav-link-custom" to="/Join">Join Us</Link>
                            </li>
                            <li className="nav-item px-3 fw-bold">
                                <Link className="nav-link-custom" to="/Contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}


export default Navbar;