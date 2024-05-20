/* eslint-disable react/no-unescaped-entities */
'use client';
import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "@/components/navbar/navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';

// ---------IMAGE
import logo from '@/public/assets/del&co logo.png';
import hero1 from '@/public/assets/hero-img1.jpg';
import hero2 from '@/public/assets/hero-png2A.png';
import hero3 from '@/public/assets/hero-png2B.png';
import service1 from '@/public/assets/service1.jpg';
import service2 from '@/public/assets/service2.jpg';
import service3 from '@/public/assets/service3.jpg';




export default function Home() {

  useEffect(() => {AOS.init();}, []);
  return (
    <main>
      <Navbar/>
      <section className="main-hero">
      <h1>Architecture</h1>
          <div className="hero-colone1">
            <div className="bloc1"></div>
            <div className="bloc2">
              <Image src={hero1} className="heroimg1" alt="del&co logo"/>
              <div className="dots"><div className="dot active"></div><div className="dot"></div><div className="dot"></div></div>
            </div>  
        </div>
        <div className="hero-colone2">
          <Image src={hero2} className="heroimg2" alt="del&co logo"/>
          <Image src={hero3} className="heroimg3" alt="del&co logo"/>
          <div className="hero-text">Chez Del&Co, nos maquettes sont conçues pour capturer l'essence de vos projets et donner vie à vos idées.</div>
          </div>
      </section>

      <section id="services" className="services" >
        <div className="px-8" data-aos-duration="700" data-aos="fade-up">
          <h1 className="title" >Nos services</h1>
          <p>Décrouvrez les services que nous proposons</p>
        </div>
        <div className="cartes-services">

          <div data-aos-duration="1000" data-aos="fade-up" className="carte">
            <div className="left"><Image src={service1} className="service1" alt="del&co logo"/></div>
            <div className="right">
              <h2>Fournitures</h2>
              <h1>Nous trouvons les fournitures conforme à vos exigences. </h1>
              <a className="service-link" href="#services">En savoir plus</a>
            </div>
          </div>
          <div data-aos-duration="1000" data-aos="fade-up" className="carte noir">
            <div className="right">
              <h2>Construstuction</h2>
              <h1>Nous prenons en charge l'intégralité de vos projets de construction.</h1>
              <a className="service-link" href="#services">En savoir plus</a>
            </div>
            <div className="left"><Image src={service2} className="service1" alt="del&co logo"/></div>
          </div>
          <div data-aos-duration="1000" data-aos="fade-up" className="carte">
            <div className="left"><Image src={service3} className="service1" alt="del&co logo"/></div>
            <div className="right">
              <h2>Achat de terrain</h2>
              <h1>Nous vous accompagnons du choix jusqu'au fin des démarche d'achat de terrain</h1>
              <a className="service-link" href="#services">En savoir plus</a>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
