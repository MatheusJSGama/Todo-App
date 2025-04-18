import styles from "./Tasks-create.module.css"
import { Task } from "../task/Task"
import { TaskEmpty } from "../tasks-empty/Tasks-empty"
import { PlusCircle } from "@phosphor-icons/react"
import { useState } from "react"

export interface ITask {
    id: number
    task: string
    isChecked: boolean
}

export function TaskCreate() {
    const [tasks, setTasks] = useState<ITask[]>([])
    const [inputValue, setInputValue] = useState('')

    function handleCreateNewTask(event: React.FormEvent) {
        event.preventDefault()

        const taskAlreadyExists = tasks.some(task => task.task.toLowerCase() === inputValue.trim().toLowerCase());

        if (!inputValue.trim()){
            setInputValue('')
            return;
        }
            

        if (taskAlreadyExists) {
            alert("Essa tarefa já existe!");
            setInputValue('')
            return;
        }

        const newTask: ITask = {
            id: new Date().getTime(),
            task: inputValue,
            isChecked: false
        }

        setTasks(state => [...state, newTask])
        setInputValue('')
    }

    const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
        if (currentTask.isChecked) {
            return prevValue + 1
        }

        return prevValue
    }, 0)

    function handleRemoveTask(taskId: number) {
        const shouldDelete = confirm('Deseja mesmo apagar essa tarefa?');
        if (!shouldDelete) return;

        const filteredTasks = tasks.filter(task => task.id !== taskId);
        setTasks(filteredTasks);
    }

    function handleToggleTask({ id, value }: { id: number, value: boolean }) {
        const updatedTasks = tasks.map((task) => {
            if (task.id === id) {
                return { ...task, isChecked: value }
            }

            return task
        })

        setTasks(updatedTasks)
    }

    const withOutTasks = tasks.length === 0


    return (
        <div className={styles.container} onSubmit={handleCreateNewTask}>
            <form className={styles.form}>
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className={styles.input}
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    required
                />
                <button
                    className={styles.button}> Criar
                    <PlusCircle color="white" size={18} weight="bold" />
                </button>
            </form>

            <div className={withOutTasks ? styles.taskscount : `${styles.taskscount} ${styles.animateBetween}`}>
                <p className={styles.taskcreated}>Tarefas criadas<span className={styles.taskedtrack}>{tasks.length}</span></p>
                <p className={styles.taskcompleted}>Concluídas
                    {withOutTasks ?
                        <span className={styles.taskedtrack}>
                            {tasks.length}
                        </span>
                        :
                        <span className={styles.taskedtrack}>
                            {checkedTasksCounter} de {tasks.length}
                        </span>
                    }
                </p>
            </div>
            {withOutTasks ? <TaskEmpty /> :
                <div className={styles.taskList}>
                    {tasks.map(task => {
                        return (
                            <Task
                                key={task.id}
                                taskData={task}
                                toggleTaskStatus={handleToggleTask}
                                removeTask={handleRemoveTask}
                            />
                        )
                    })}
                </div>}
        </div>

    )
}