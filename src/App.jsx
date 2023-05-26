import {Post} from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import './global.css'
import styles from './App.module.css'


export function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author='Felipe' 
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at et recusandae? Reiciendis, provident mollitia vero est natus quam autem harum reprehenderit et eveniet. Minima deserunt neque unde provident hic.'
          />
          <Post 
            author='Felipe' 
            content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Non at et recusandae? Reiciendis, provident mollitia vero est natus quam autem harum reprehenderit et eveniet. Minima deserunt neque unde provident hic.'
          />
        </main>

      </div>
    </div>
      
  )
}


