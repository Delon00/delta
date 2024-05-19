import { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '@/public/assets/del&co logo.png';
import close from '@/public/assets/close.png';
import "./navbarCss.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            openModal();
        } else {
            closeModal();
        }
    }, [isOpen]);

    useEffect(() => {
        if (!isModalOpen) {
            setIsOpen(false);
        }
    }, [isModalOpen]);

    return (
        <div className="navbar">
            <div className="navbar-col justify-start">
                <Image src={logo} className="logo" alt="del&co logo" />
            </div>
            <div className="navbar-col nav-links">
                <a href="#" className="nav-link"><p>Home</p></a>
                <a href="#" className="nav-link"><p>Services</p></a>
                <a href="#" className="nav-link"><p>A propos</p></a>
                <a href="#" className="nav-link"><p>Contact</p></a>
            </div>
            {!isOpen && (
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="hamburger-bar"></div>
                    <div className="hamburger-bar"></div>
                    <div className="hamburger-bar"></div>
                </div>
            )}

            <div className={`modal ${isModalOpen ? 'active' : ''}`}>
                <div className="modal-menu">
                    <div className="modal-title"><h1>Menu</h1> <span onClick={toggleMenu} className='close-modal'><Image src={close} alt='close' /></span></div>
                    <hr />
                    <div className='modal-links'>
                        <a href="#" className="modal-link"><p>Home</p></a>
                        <a href="#" className="modal-link"><p>Services</p></a>
                        <a href="#" className="modal-link"><p>A propos</p></a>
                        <a href="#" className="modal-link"><p>Contact</p></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
