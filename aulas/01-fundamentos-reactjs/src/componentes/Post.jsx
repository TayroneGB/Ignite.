import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-br';

import { Avatar } from './Avatar';
import { Commene } from './comment';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content}) {
    /*const publishedDateFormatted = format(
        publishedAt,
        "d 'de' LLLL 'às' HH:mm'h'",
        {
          locale: ptBR,
        }
      );
       <time title='06 de junho ás 15:30h' dateTime="2022-06-06">{publishedDateFormatted}</time>
      */
    
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                   <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
              
            <time title='06 de junho ás 15:30h' dateTime="2022-06-06">{publishedAt}</time>
             
            </header>

            <div className={styles.content}>
                {content.map(line =>{
                    if (line.type === 'paragraph'){
                        return <p>{line.content}</p>;
                    } else if (line.type === 'link'){
                        return <p><a href='#'>{line.content}</a></p>;
                }})}
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