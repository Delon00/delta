import { useState } from 'react';
import Image from 'next/image';
import logo from '@/public/assets/del&co logo.png';
import close from '@/public/assets/close.png';
import "./navbarCss.css";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setIsModalOpen(!isModalOpen);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsOpen(false);
    };

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
            {isOpen && (
                <div className="hamburger-close" onClick={toggleMenu}>
                    <Image src={close} alt='close' />
                </div>
            )}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <ModalContent>
                    <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                    <ModalBody>
                        {/* Contenu de votre modal */}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </div>
    );
}
