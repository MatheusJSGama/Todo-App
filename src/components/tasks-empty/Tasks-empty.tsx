import styles from "./Tasks-empty.module.css"
import {ClipboardText} from "@phosphor-icons/react"

export function TaskEmpty(){
    return(
        <div className={styles.taskEmpty}>
            <ClipboardText size={56} color="lightgray"/>
            <p className={styles.text}>
                <span>Você ainda não tem tarefas cadastradas.</span>
                Crie tarefas e organize seus itens a fazer.
            </p>
        </div>
    )
}