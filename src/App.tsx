import "./global.css"
import styles from "./App.module.css"
import { Header } from "./components/header/Header"
import { TaskCreate } from "./components/tasks-create/Tasks-create"

function App() {
 return(
  <div className={styles.container}>
    <Header/>
    <TaskCreate/>
  </div>
 )
}

export default App
