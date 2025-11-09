import styles from "@/app/styles/proyects.module.css"
import { LuExternalLink } from "react-icons/lu";
import { IoCodeSlash } from "react-icons/io5";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'], weight: ['400', '500', '600']
})

export default function Proyects() {
    return (
        <>
            <div className={styles['div-general-pryects']}>
                <h2 className={spaceGrotesk.className}>PROYECTOS</h2>

                <h3 className={spaceGrotesk.className}>Freelance</h3>

                <div className={styles["cards-proyects"]}>
                    <div className={styles["card-image"]}>
                        <img src="/capturahome.png" alt="Proyecto TuFit" />
                    </div>
                    <div className={styles["card-content"]}>
                        <h3>Tu-Fit</h3>
                        <span className={styles["card-subtitle"]}>E-commerce</span>
                        <p>
                            Diseñé y desarrollé la página web de <a className={styles["enlace"]} href="https://www.instagram.com/tufit.laplata/">TU-FIT</a> utilizando Next.js, con foco en performance, SEO y una interfaz
                            responsive adaptada a todo tipo de dispositivos. El sitio muestra la propuesta de valor del negocio y facilita
                            la conexión con sus clientes de manera profesional y atractiva.
                        </p>
                       

                        <div className={styles["card-links"]}>
                            <a href="https://www.tu-fit.com/"><LuExternalLink /> Ver Proyecto</a>
                            <a href="https://github.com/Gero0202/tu-fit"><IoCodeSlash />Codigo</a>
                        </div>
                    </div>
                </div>


                 <h3 className={spaceGrotesk.className}>Frontend UX/UI</h3>

                 <div className={styles["card-container-proyect"]}>

                    {/* Burger labs */}

                    <div className={styles["cards-proyects"]}>
                        <div className={styles["card-image"]}>
                            <img src="/captura-cafelanding.png" alt="Proyecto cafe" />
                        </div>
                        <div className={styles["card-content"]}>
                            <h3>MOOD Cafe</h3>
                            <span className={styles["card-subtitle"]}>MOOD Cafe landing </span>
                            <p>
                                Landing page diseñada para una marca artesanal de café. El proyecto busca transmitir una experiencia cálida y sensorial, combinando diseño minimalista, animaciones suaves y una paleta inspirada en tonos café y crema.
                            </p>

                            <div className={styles["card-links"]}>
                                <a href="https://cafe-landing-taupe.vercel.app/"><LuExternalLink /> Ver Proyecto</a>
                                <a href="https://github.com/Gero0202/CafeLanding"><IoCodeSlash /> Codigo</a>
                            </div>
                        </div>
                    </div>

                    <div className={styles["cards-proyects"]}>
                        <div className={styles["card-image"]}>
                            <img src="/burguerlabs-screen.png" alt="Proyecto Tres" />
                        </div>
                        <div className={styles["card-content"]}>
                            <h3>Burguer-Labs</h3>
                            <span className={styles["card-subtitle"]}>Biblioteca de menus desplegables </span>
                            <p>
                                Colección de menús hamburguesa listos para usar en proyectos web. Incluye diseños en HTML, CSS, JavaScript y React, pensados para mejorar la experiencia de usuario (UX/UI) y agilizar el desarrollo frontend. Cada menú es totalmente personalizable, moderno y responsive, ideal para integrar en diferentes tipos de sitios o aplicaciones.
                            </p>

                            <div className={styles["card-links"]}>
                                <a href="https://burguer-labs.vercel.app/"><LuExternalLink /> Ver Proyecto</a>
                                <a href="https://github.com/Gero0202/BurguerLabs"><IoCodeSlash /> Codigo</a>
                            </div>
                        </div>
                    </div>




                    {/* ReactButtons */}

                    <div className={styles["cards-proyects"]}>
                        <div className={styles["card-image"]}>
                            <img src="/reactbuttons-screen.png" alt="Proyecto Cuatro" />
                        </div>
                        <div className={styles["card-content"]}>
                            <h3>React-Buttons</h3>
                            <span className={styles["card-subtitle"]}>Botones en CSS listos para usar</span>
                            <p>
                                Coleccion de botones modernos hechos con CSS, listos para copiar y pegar en tus proyectos.
                                Incluye diferentes estilos, animaciones y variantes, faciles de integrar sin necesidad de dependencias extra.
                                Ideal para dar estilo rapido a tu aplicacion sin complicaciones.
                            </p>

                            <div className={styles["card-links"]}>
                                <a href="https://react-buttons-ten.vercel.app/"><LuExternalLink /> Ver Proyecto</a>
                                <a href="https://github.com/Gero0202/React-buttons"><IoCodeSlash /> Codigo</a>
                            </div>
                        </div>
                    </div>

                    </div>

                <h3 className={spaceGrotesk.className}>Full-Stack</h3>
                <div className={styles["card-container-proyect"]}>

                    <div className={styles["cards-proyects"]}>
                        <div className={styles["card-image"]}>
                            <img src="/looplife-captura.png" alt="Loop Life" />
                        </div>

                        <div className={styles["card-content"]}>
                            <h3>Loop Life</h3>
                            <span className={styles["card-subtitle"]}>Red social de musica</span>
                            <p>
                                LoopLife es una plataforma social para apasionados por la musica desarrollada con Next.js y TypeScript, utilizando PostgreSQL
                                en Supabase para la gestion eficiente de datos.
                                Implementa autenticacion y optimizacion de rendimiento, ofreciendo una experiencia fluida
                                y escalable para compartir y descubrir loops musicales.
                            </p>
                            <div className={styles["card-links"]}>
                                <a href="https://loop-life-pearl.vercel.app/"><LuExternalLink /> Ver Proyecto</a>
                                <a href="https://github.com/Gero0202/LoopLife"><IoCodeSlash /> Codigo</a>
                            </div>
                        </div>
                    </div>





                    <div className={styles["cards-proyects"]}>
                        <div className={styles["card-image"]}>
                            <img src="/rollingstore-captura.png" alt="Proyecto Dos" />
                        </div>
                        <div className={styles["card-content"]}>
                            <h3>Rolling Store</h3>
                            <span className={styles["card-subtitle"]}>E-commerce</span>
                            <p>
                                Rolling Store es una plataforma e-commerce desarrollada con Node.js, Express y MongoDB, utilizando Handlebars para el frontend.
                                Permite gestionar productos, autenticar usuarios y ofrecer un flujo de compra agil en una arquitectura integrada de backend y
                                frontend.
                            </p>
                            <p className={styles["card-note"]}>
                                *El proyecto esta desplegado en Render (version gratuita), por lo que la carga inicial puede demorar unos segundos.
                            </p>

                            <div className={styles["card-links"]}>
                                <a href="https://rolling-store.onrender.com/"><LuExternalLink /> Ver Proyecto</a>
                                <a href="https://github.com/Gero0202/Rolling-store"><IoCodeSlash /> Codigo</a>
                            </div>
                        </div>
                    </div>

                   

                </div>
            </div>
        </>
    )
}