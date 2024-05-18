import "./navbarCss.css"
import logo from '@/public/assets/del&co logo.png';
import Image from "next/image"; 

export default function Navbar(){
return (
    <div className="navbar">
        <div className="navbar-col justify-start"><Image src={logo} className="logo" alt="del&co logo"/></div>
        <div className="navbar-col justify-end">
            <a className="nav-link">Home</a>
            <a className="nav-link">Services</a>
            <a className="nav-link">A propos</a>
            <a className="nav-link">Contact</a>
        </div>

    </div>
);
};