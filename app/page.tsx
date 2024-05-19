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




export default function Home() {

  useEffect(() => {AOS.init();}, []);
  return (
    <main>
      <Navbar/>
      <section className="main-hero">
      <h1>Architecture</h1>
          <div className="hero-colone1">
            <div className="bloc1"></div>
            <div className="bloc2"><Image src={hero1} className="heroimg1" alt="del&co logo"/></div>

        </div>
        <div className="hero-colone2">
          <Image src={hero2} className="heroimg2" alt="del&co logo"/>
          <Image src={hero3} className="heroimg3" alt="del&co logo"/>
          <div className="hero-text">Chez Del&Co, nos maquettes sont conçues pour capturer l'essence de vos projets et donner vie à vos idées.</div>
          </div>
      </section>

      <section id="services" className="services" >
        <h1 data-aos-duration="700" data-aos="fade-up">Nos services</h1>
        <div className="cartes-services">
          <div className="service-card">
            <Image src={service1} className="service1" alt="del&co service"/>
            <div className="overlay">
              <div className="w-full">
                <h2>Service Fourniture</h2>
                <a href="http://">En savoir plus</a>
              </div>
              <div><Image src={service1} className="service1" alt="del&co service"/></div>
            </div>
          </div>
          <div className="service-card"></div>
          <div className="service-card"></div>
          <div className="service-card"></div>
          <div className="service-card"></div>
          <div className="service-card"></div>
        </div>
      </section>

    </main>
  );
}
