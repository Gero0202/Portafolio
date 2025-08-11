import styles from "@/app/styles/skills.module.css"
import { MdSchool } from 'react-icons/md';

export default function Skills() {
    return (


        <div className={styles.educationSection}>
            <h2>Formacion y crecimiento profesional <MdSchool /></h2>

            <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                    <div className={styles.timelineContent}>
                        <h3>Carrera Full Stack Developer <span>– Coderhouse (Bootcamp)</span></h3>
                        <ul>
                            <li><strong>Desarrollo Web:</strong> Dominio de HTML5, CSS3 y JavaScript moderno, con enfoque en diseño responsive y accesible, siguiendo buenas practicas para crear interfaces limpias y usables.</li>
                            <li><strong>React.js:</strong> Construccion de componentes reutilizables y dinámicos, manejo avanzado de estado con hooks, consumo eficiente de APIs REST y optimizacion del rendimiento.</li>
                            <li><strong>Backend (Node.js MERN):</strong> Desarrollo de APIs RESTful robustas con Express, manejo de bases de datos NoSQL (MongoDB), implementación de autenticacion segura, pruebas automatizadas con <strong>Supertest</strong> y <strong>Jest</strong>, y despliegue de aplicaciones en la nube.</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.timelineItem}>
                    <div className={styles.timelineContent}>
                        <h3>Aprendizaje Autodidacta</h3>
                        <ul>
                            <li><strong>Next.js:</strong> Creacion de aplicaciones React con renderizado hibrido (SSR/SSG), rutas dinamicas avanzadas y optimizacion para mejorar la experiencia de usuario y SEO.</li>
                            <li><strong>TypeScript:</strong> Aplicacion de tipado estatico para mejorar la calidad del codigo, manejo de interfaces, enums y tipos condicionales para proyectos escalables y mantenibles.</li>
                            <li><strong>SQL:</strong> Diseño y modelado de bases de datos relacionales, creacion de consultas complejas, optimizacion y mantenimiento de integridad referencial.</li>
                            <li><strong>Git:</strong> Uso efectivo del control de versiones para gestion de proyectos y trabajo colaborativo mediante ramas, merges y resolucion de conflictos.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}