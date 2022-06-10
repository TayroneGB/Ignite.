import { Header } from "./componentes/Header";
import {Post} from "./componentes/Post";

import styles from './App.module.css'

import './global.css';
import { Sidebar } from "./componentes/Sidebar";

export function  App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
      <Sidebar/>
        <main>
            <Post 
              autor = "Diego "
              content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, doloribus repellat fugit ullam voluptatibus facere nesciunt! Est odit perferendis obcaecati aliquam delectus? Velit delectus esse fugiat rem, soluta quibusdam consectetur!"
          />
           <Post 
              autor = "Diego "
              content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, doloribus repellat fugit ullam voluptatibus facere nesciunt! Est odit perferendis obcaecati aliquam delectus? Velit delectus esse fugiat rem, soluta quibusdam consectetur!"
          />
        </main>
      </div>

    </div>
  )
}
