import { Avatar } from './Avatar';
import { Commene } from './comment';
import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                   <Avatar src="https://github.com/TayroneGB.png" />
                    <div className={styles.authorInfo}>
                        <strong>Tayrone Guimarães</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title='10 de junho ás 15:30h' dateTime="2022-08-06"> Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉<a href=""> jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>
                    <a href=""> #nlw</a>
                    <a href=""> #rocketseat</a>
                </p>
            </div>

            <form className={styles.comment}>
                <strong>Deixe seu feedback</strong>

                <textarea
                placeholder='Deixe um comentario'
                />
                <footer>
                    <button type='submit'>
                        Publicar
                    </button>
                </footer>
            </form>
            <div className={styles.commentList}>
                <Commene />
                <Commene />
                <Commene />
            </div>
        </article>
    )
}