import Image from 'next/image'
import React from 'react'
import logo from '@/public/assets/del&co logo.png';
import Link from 'next/link'
import'./footer.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";


export default function Footer() {
  return (
    <div className='bg-footer-bg lg:py-10 px-4 py-3 bg-center text-slate-50 bg-no-repeat bg-cover   flex flex-col footer '>
      <div className="footer-card flex flex-col items-center justify-center lg:p-14 p-10 rounded-xl bg-slate-300/10   mx-auto w-full">
        <div className="flex flex-col w-full max-w-5xl">

          <div className='grid lg:grid-cols-3 sm:grid-cols-1 lg:gap-10 md:grid-cols-2 gap-14 w-full '>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-col gap-4'>
                <Link href={'/'}>
                  <Image src={logo} width={180} height={90} alt='logo IFIAG' />
                </Link>
                <p className='text-slate-400 text-sm text-balance'>Del&Co est une entreprise Spécialisé dans le domaine de la construction de bien de bien immobilier</p>
              </div>
              <div className="flex flex-col gap-4">
                <h3>Suivez nous :</h3>
                <div className="flex gap-2">
                  <span className='p-3 bg-slate-700/50 rounded-full'> 
                    <Link className='text-xl h-6 w-6 ' href={''} ><FaFacebookF /> </Link>
                  </span>
                  <span  className='p-3 bg-slate-700/50 rounded-full'>
                    <Link className='text-xl h-6 w-6 ' href={''} ><FaInstagram /></Link>
                  </span>
                  <span  className='p-3 bg-slate-700/50 rounded-full'>
                    <Link className='text-xl h-6 w-6 ' href={''} ><FaLinkedinIn /></Link>
                  </span>
                  <span  className='p-3 bg-slate-700/50 rounded-full'>
                    <Link className='text-xl h-6 w-6 ' href={''} ><FaYoutube /></Link>
                  </span>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-6'>
                <div className="title">
                    <h3 className='text-2xl text-balance'>Construction <br /> et Fourniture</h3>
                    <span className="inline-block h-1 w-24 self-stretch bg-[#f57e27]"></span>
                </div>

                <ul className='flex flex-col gap-6 pl-3'>
                    <li className='list-disc text-slate-400 text-sm'>
                    <Link href={''}>Plans de construction personnalisés</Link>
                    </li>
                    <li className='list-disc text-slate-400 text-sm'>
                    <Link href={''}>Construction de maisons clé en main</Link>
                    </li>
                    <li className='list-disc text-slate-400 text-sm'>
                    <Link href={''}>Rénovation et extension de maisons</Link>
                    </li>
                    <li className='list-disc text-slate-400 text-sm'>
                    <Link href={''}>Fourniture de matériaux de construction</Link>
                    </li>
                    <li className='list-disc text-slate-400 text-sm'>
                    <Link href={''}>Installation de systèmes électriques</Link>
                    </li>
                    <li className='list-disc text-slate-400 text-sm'>
                    <Link href={''}>Aménagement paysager et extérieur</Link>
                    </li>
                </ul>
                </div>


                <div className='flex flex-col gap-6 pl-3'>
  <div className="title ">
    <h3 className='text-2xl text-balance'>Achat de terrain</h3>
    <span className="inline-block h-1 w-24 self-stretch bg-[#F17E3A]"></span>
  </div>
  <ul className='flex flex-col gap-6'>
    <li className='list-disc text-slate-400 text-sm'>
      <Link href={''}>Recherche de terrains disponibles</Link>
    </li>
    <li className='list-disc text-slate-400 text-sm'>
      <Link href={''}>Évaluation et estimation de la valeur des terrains</Link>
    </li>
    <li className='list-disc text-slate-400 text-sm'>
      <Link href={''}>Conseils juridiques pour l'acquisition de terrains</Link>
    </li>
    <li className='list-disc text-slate-400 text-sm'>
      <Link href={''}>Négociation et achat de terrains</Link>
    </li>
    <li className='list-disc text-slate-400 text-sm'>
      <Link href={''}>Aménagement et préparation de terrains</Link>
    </li>
    <li className='list-disc text-slate-400 text-sm'>
      <Link href={''}>Gestion des permis de construire</Link>
    </li>
  </ul>
</div>



          </div>
          <hr
            class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
          <div className="flex items-center justify-between gap-2 lg:flex-row flex-col-reverse text-sm text-slate-400">
            <div className=" text-xs">
              Copyright &copy; 2024 <Link className='text-[#F17E3A]' href={'/'}>Del&Co</Link> All Rights Reserved.
            </div>
            <div className="flex gap-3 text-sm">
              <Link href={'/'}>Politique de confidentialité</Link>
              <Link href={'/'}>Termes & Condition</Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}