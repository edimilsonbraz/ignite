import styles from './Comment.module.css';

import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Comment({content, onDeleteComment}) {
  function handleDeleteComment() {
    onDeleteComment(content)
  }

  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/edimilsonbraz.png" alt="" />

      <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Edimilson Braz</strong>
                <time title="01 de Outubro às 09:30h" dateTime='2022-01-10 09:30:00'>Cerca de 1h atrás</time>
              </div>

              <button onClick={handleDeleteComment} title='Deletar comentário'>
                <Trash size={24}/>
              </button>
            </header>

            <p>{content}</p>
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