import {Post} from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import './global.css'
import styles from './App.module.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/felipeFavaSouza.png',
      name: 'Felipe Fava',
      role: 'Frontend'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'feli.design/doctorcare'},
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/felipeFavaSouza.png',
      name: 'Felipe Fava',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Opa pessoal continuo aprendendo bastante. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'feli.design/doctorcare'},
    ],
    publishedAt: new Date('2023-05-29 20:00:00'),
  },
]

export function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return( 
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>

      </div>
    </div>
      
  )
}


