import syles from "@/app/styles/aboutMe.module.css"

export default function AboutMe() {
    return (
        <>
            <div className={syles['div-about-me']}>
                <p className={syles['about-me-title']}>Hola soy Gero! Un placer conocerte.</p>
                <p className={syles['about-me-text']}>
                    Mi viaje en el desarrollo web comenzo con una pasion simple: me encanta construir.
                    Disfruto de todo el proceso de tomar una idea, darle forma en mi cabeza y verla convertirse
                    en una experiencia digital. Como desarrollador, lo que mas me atrae es el desafío de enfrentar
                    problemas tecnicos; una habilidad que he aprendido a cultivar con paciencia y perseverancia.
                    Estoy emocionado por mi primer rol en una empresa y listo para aportar mis habilidades a un equipo donde
                    pueda seguir creciendo y aprendiendo.
                </p>
            </div>
        </>
    )
}