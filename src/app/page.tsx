import Image from 'next/image'
import styles from "./page.module.css";
import { Righteous } from 'next/font/google'
import { Space_Grotesk } from 'next/font/google';
import { FaGithub, FaLinkedin, FaAngleDown } from "react-icons/fa";
import CopyEmailButton from './components/CopyEmailButton';
import AboutMe from './components/AboutMe';
import CardsIcons from './components/CardsIcons';
import Proyects from './components/Proyects';
import Skills from './components/Skills';

const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'], weight: ['400', '500', '600']
})

export default function Home() {
  return (
    <>   
      <div className={styles['div-general']}>
        <div className={styles['div-img']}>
          <Image src="/buhoport.svg" alt="Imagen del búho" className={styles["owl-image"]} width={300} height={230} />
        </div>

        <div className={styles['div-texto-princial']}>
          <p className={`${righteous.className} ${styles['nombre-clase']}`}>Geronimo Tortosa</p>
          <p className={`${spaceGrotesk.className} ${styles['nombre-fullstack']}`}>Full Stack Web Developer</p>
          <p className={`${spaceGrotesk.className} ${styles['descripcion-inicial']}`}>No soy un experto, pero ya rompi lo suficiente como para no asustarme cuando algo se rompe.</p>
          <div className={styles['div-iconos-principal']}>
            <a
              href="https://github.com/Gero0202"
              target="_blank"
              rel="noopener noreferrer"
              className={styles['iconos-git-link']}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/geronimo-agustin-tortosa-9862911b4/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles['iconos-git-link']}
            >
              <FaLinkedin />
            </a>

            <a
              href="/CV-septiembre.pdf"
              download="Geronimo-Tortosa-CV.pdf"
              className={styles['btn-cv']}
            >
              Descargar CV
            </a>
            <CopyEmailButton />
          </div>
        </div>
      </div>
      <FaAngleDown className={styles['arrow-middle']} />

      <Proyects />
      <AboutMe />
      <CardsIcons />
      <Skills />

      <footer className={styles["footer"]}>
        <p>Creado por Geronimo Tortosa © 2025</p>
      </footer>

    </>
  )
}


