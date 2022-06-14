import { Header } from "./componentes/Header";
import {Post} from "./componentes/Post";

import styles from './App.module.css'

import './global.css';


import { Sidebar } from "./componentes/Sidebar";

const posts = [
  {
      id:1,
      author: {
        avatarUrl: 'https://github.com/TayroneGB.png',
        name: 'Tayrone Guimarães',
        role: 'Dev'
      },
      content: [
       {type:'paragraph', content: 'Fala galeraa'},
       {type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare'},
       {type:'link', content:' jane.design/doctorcare'},
      ],
      publisheaAt: new Date('2022-06-14 16:00:00'),
  },
  {
    id:2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
     {type:'paragraph', content: 'Fala galeraa'},
     {type:'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare'},
     {type:'link', content:' jane.design/doctorcare'},
    ],
    publisheaAt: new Date('2022-06-14 18:45:40'),
},
];



export function  App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
      <Sidebar/>
        <main>
          {posts.map(post => {
            return (
            <Post
                author={post.author}
                content={post.content}
                publisheaAt={post.publisheaAt}
            />
            )
          })}
        </main>
      </div>

    </div>
  )
}
