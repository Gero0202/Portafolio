import styles from "@/app/styles/cardsIcon.module.css"
import { DiJsBadge, DiHtml5, DiCss3, DiReact, DiVisualstudio, DiNodejs } from "react-icons/di"
import { SiPostgresql, SiVercel, SiExpress ,SiPostman, SiNextdotjs, SiMongodb, SiVite, SiRender, SiSupabase   } from "react-icons/si"


export default function CardsIcons() {
    return (
        <>
            <div className={styles["card-container"]}>
                <div className={styles["card"]}>
                    <h3>Front-end</h3>
                    <div className={styles["icon-grid"]}>
                        <DiJsBadge style={{ color: "#F7DF1E" }}/>
                        <DiHtml5 style={{ color: "#E34F26" }}/>
                        <DiCss3 style={{ color: "#1572B6" }}/>
                        <DiReact style={{ color: "#61DAFB" }}/>
                        <SiNextdotjs style={{ color: "#ffffffff" }}/>
                        <SiVite style={{ color: "#7964ffff" }}/>
                    </div>
                </div>
                <div className={styles["card"]}>
                    <h3>Back-end</h3>
                    <div className={styles["icon-grid"]}>
                        <DiNodejs style={{ color: "#339933" }}/>
                        <SiPostgresql style={{ color: "#336791" }}/>
                        <SiExpress style={{ color: "#ffffffff" }}/>                       
                        <SiMongodb style={{ color: "#47A248" }}/>
                    </div>
                </div>
                <div className={styles["card"]}>
                    <h3>Tecnologias</h3>
                    <div className={styles["icon-grid"]}>
                        <DiVisualstudio style={{ color: "#2f8cc9ff" }}/>
                        <SiPostman style={{ color: "#FF6C37" }}/>
                        <SiVercel style={{ color: "#ffffffff" }} />
                        <SiRender style={{ color: "#ee35ffff" }}/>
                        <SiSupabase style={{ color: "#3ECF8E" }}/> 

                    </div>
                </div>
            </div>
        </>
    )
}