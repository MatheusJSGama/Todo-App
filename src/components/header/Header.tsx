import styles from "./Header.module.css"
import logoImage from "../../assets/Logo.png"

export function Header(){
    return(
        <header className={styles.header}>
            <img src={logoImage} alt="Imagem do Logo" />
        </header>
    )
}