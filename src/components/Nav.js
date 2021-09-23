import "./nav.css";
import Logo from "./logo.jpg";
import { NavLink } from "react-router-dom";

export default function Nav(){
    return(
    <header>    
      <img className="logo" src={Logo}/>
    <nav>
        <ul className="nav_links">
            <li>
            <NavLink exact to="/" 
            style={{
            textDecoration:"none",
            color:"white"
            }} 
             activeStyle={{
                textDecoration:"none",
                color:"rgb(23, 180, 219)"
            }}>
                Home
            </NavLink>
            </li>
            <li>
                <NavLink
                 exact to="/blog" 
                 style={{
            textDecoration:"none",
            color:"white"
            }} 
             activeStyle={{
                textDecoration:"none",
                color:"rgb(23, 180, 219)"
            }}>
                Blog
            </NavLink>
            </li>
            <li>
                <NavLink
                 exact to="/about"
                 style={{
            textDecoration:"none",
            color:"white"
            }}  
             activeStyle={{
                textDecoration:"none",
                color:"rgb(23, 180, 219)"
            }}>
                About
            </NavLink>
            </li>

        </ul>
    </nav>
    <NavLink className="cta" to="/contact"><button>Contact</button></NavLink>
    </header> 
    );
}