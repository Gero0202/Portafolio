import syles from "@/app/styles/aboutMe.module.css"

export default function AboutMe() {
    return (
        <>
            <div className={syles['div-about-me']}>
                <p className={syles['about-me-title']}>Hola soy Gero.</p>
                <p className={syles['about-me-text']}>
                    Desarrollador enfocado en la lógica de programación y el diseño de software. Trabajo en la integración entre frontend, backend y bases de datos, resolviendo requerimientos técnicos mediante código estructurado y funcional.
                </p>
            </div>
        </>
    )
}