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
import hero2 from '@/public/assets/hero-img2.jpg';
import hero3 from '@/public/assets/hero-img3.jpg';




export default function Home() {

  useEffect(() => {AOS.init();}, []);
  return (
    <main>
      <Navbar/>
      <section className="main-hero">
        <div className="hero-title">
          <h1>Architecture</h1>

        </div>
          <div className="hero-colone1"><div className="blank-hero"></div><Image src={hero1} className="heroimg1" alt="del&co logo"/>
          <div className="hero-col-text">
            <h3>Une bonne architecture équilibre la fonctionnalité et l'esthétique. Un bâtiment doit être non seulement beau mais aussi pratique et confortable pour ses utilisateurs.</h3>
          </div>
        </div>
        <div className="hero-colone2">
          <h2>Chez Del&Co, nous proposons des maquettes architecturales innovantes et de haute qualité. Nos maquettes sont conçues pour capturer l'essence de vos projets et donner vie à vos idées de manière tangible et visuellement saisissante. Que vous soyez un architecte, un promoteur immobilier ou un particulier, nos maquettes sont conçues pour répondre à vos besoin.</h2>
        </div>
        <div className="hero-colone3"><Image src={hero2} className="heroimg" alt="del&co logo"/></div>
      </section>

      <section className="home-section2" data-aos-duration="700" data-aos="fade-up">

      </section>

    </main>
  );
}
