import styles from "@/app/styles/proyects.module.css"
import { LuExternalLink } from "react-icons/lu";
import { IoCodeSlash } from "react-icons/io5";

export default function Proyects() {
    return (
        <>
            <div className={styles['div-general-pryects']}>
                <h2>Proyectos</h2>

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