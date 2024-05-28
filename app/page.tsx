/* eslint-disable react/no-unescaped-entities */
'use client';

import Image from "next/image";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaLongArrowAltRight } from "react-icons/fa";

import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

// ---------IMAGE IMPORTS
import logo from '@/public/assets/del&co logo.png';
import hero1 from '@/public/assets/hero-img1.jpg';
import hero2 from '@/public/assets/hero-png2A.png';
import hero3 from '@/public/assets/hero-png2B.png';
import service1 from '@/public/assets/service1.jpg';
import service2 from '@/public/assets/service2.jpg';
import service3 from '@/public/assets/service3.jpg';
import apropos1 from '@/public/assets/apropos1.jpg';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  const services = [
    {
      image: service1,
      title: 'Fourniture',
      description: 'Nous trouvons les fournitures qui sont parfaitement conformes à toutes vos exigences et spécifications.'
    },
    {
      image: service2,
      title: 'Design',
      description: 'Nos designs sont réalisés avec soin pour répondre à vos attentes et donner vie à vos idées.'
    },
    {
      image: service3,
      title: 'Construction',
      description: 'Nous assurons la construction de vos projets avec la plus grande rigueur et professionnalisme.'
    }
  ];

  return (
    <main>
      <Navbar />

      <section className="main-hero">
        <h1>Architecture</h1>
        <div className="hero-colone1">
          <div className="bloc1"></div>
          <div className="bloc2">
            <Image src={hero1} className="heroimg1" alt="hero image 1" />
            <div className="dots">
              <div className="dot active"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
        <div className="hero-colone2">
          <Image src={hero2} className="heroimg2" alt="hero image 2" />
          <Image src={hero3} className="heroimg3" alt="hero image 3" />
          <div className="hero-text">
            Chez Del&Co, nos maquettes sont conçues pour capturer l'essence de vos projets et donner vie à vos idées.
          </div>
        </div>
      </section>

      <section id="services" className="services">

          <div className="px-8" data-aos-duration="700" data-aos="fade-up">
            <h1 className="title">Nos services</h1>
            <p>Découvrez les services que nous proposons</p>
          </div>
          <div className="cartes-services">
            {services.map((service, index) => (
              <div data-aos-duration="700" data-aos="fade-up" key={index} className={`carte ${index === 1 ? 'noir' : ''}`}>
                <Image src={service.image} className="service-img" alt={`${service.title} image`} />
                <div className="carte-info">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className={`btn-carte ${index === 1 ? 'noir' : ''}`}>
                    <span>En savoir plus</span>
                    <FaLongArrowAltRight />
                  </div>
                </div>
              </div>
            ))}
          </div>

      </section>

      <section id="apropos">
        <div className="overlay"></div>
        <div className="textes-apropos">
          <h1 className="title-apropos">A propos de nous</h1>
            <p className="text-apropos">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eaque provident possimus necessitatibus obcaecati magnam perspiciatis? 
              Suscipit vitae, veritatis impedit aliquid, nobis quam ducimus pariatur dignissimos explicabo nesciunt repellat hic. 
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam esse necessitatibus alias fuga molestiae distinctio 
              qui placeat sit voluptate ex error reprehenderit, debitis aperiam asperiores sed dolorum similique nam quae! 
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, enim eveniet. Dolorum minima soluta nemo? Eos doloribus 
              nostrum repudiandae inventore soluta! Dolore repellat dignissimos voluptates qui nostrum voluptatum libero nisi.
            </p>
          <div>
        </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
