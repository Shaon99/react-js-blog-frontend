import "./nav.css";
import Logo from "./logo.jpg";
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <header>
            <img className="logo" src={Logo} />
            <nav>
                <ul className="nav_links">
                    <li>
                        <NavLink exact to="/"
                            style={{
                                textDecoration: "none",
                                color: "white",
                            }}
                            activeStyle={{
                                textDecoration: "none",
                                color: "rgb(23, 180, 219)"
                            }}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact to="/blog"
                            style={{
                                textDecoration: "none",
                                color: "white"
                            }}
                            activeStyle={{
                                textDecoration: "none",
                                color: "rgb(23, 180, 219)"
                            }}>
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            exact to="/about"
                            style={{
                                textDecoration: "none",
                                color: "white"
                            }}
                            activeStyle={{
                                textDecoration: "none",
                                color: "rgb(23, 180, 219)"
                            }}>
                            About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink 
                            exact to="/contact"
                            style={{
                                textDecoration: "none",
                                color: "white"
                            }}
                            activeStyle={{
                                textDecoration: "none",
                                color: "rgb(23, 180, 219)"
                            }}>
                            Contact
                        </NavLink>
                    </li>

                </ul>
                <div className=" nav_btn">
                <div className="link"></div>
                <div className="link"></div>
                <div className="link"></div>
                
            </div >
            </nav>
        
        </header >
    );
}