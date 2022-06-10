import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './comment.module.css'

export function Commene() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/TayroneGB.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Tayrone Guimarães</strong>
                            <time title='10 de junho ás 15:30h' dateTime="2022-08-06"> Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam porro molestias eveniet perferendis </p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}