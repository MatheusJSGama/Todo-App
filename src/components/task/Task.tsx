import styles from "./Task.module.css"
import { Trash, Check } from "@phosphor-icons/react"
import { ITask } from "../tasks-create/Tasks-create"

interface TaskProps {
    taskData: ITask
    toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void
    removeTask: (id: number) => void
}

export function Task({ taskData, toggleTaskStatus, removeTask }: TaskProps) {

    function handleTaskToggle() {
        toggleTaskStatus({ id: taskData.id, value: !taskData.isChecked })
    }

    function handleDeleteTask() {
        removeTask(taskData.id)
    }

    const checkboxCheckedStyles = taskData.isChecked
    ? styles['checkbox-checked']
    : styles['checkbox-unchecked']

    return (
        <div className={styles.task}>
            <div className={styles.inputContainer} onClick={handleTaskToggle}>
                <label htmlFor="checkbox">
                    <input
                        className={styles.input}
                        readOnly
                        type="checkbox"
                        checked={taskData.isChecked}
                    />
                    <span className={`${styles.checkbox} ${checkboxCheckedStyles}`}>
                    {taskData.isChecked && <Check size={12} color="#F2F2F2"/>}
                    </span>
                </label>
                <p className={taskData.isChecked
                    ? `${styles.text} ${styles.lineThrough}`
                    : styles.text}>
                    {taskData.task}
                </p>
            </div>
            <button className={styles.button}>
                <Trash size={24} onClick={handleDeleteTask} />
            </button>
        </div>
    )
}