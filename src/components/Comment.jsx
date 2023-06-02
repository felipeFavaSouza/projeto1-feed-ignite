import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { useState } from 'react'
import { Avatar } from './Avatar';


export function Comment({ content, onDeleteComment }) {
    function handleDeleteComment() {
        onDeleteComment(content)
    }

    const [likeCount, setLikeCount] = useState(0); 

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1
        })
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/felipeFavaSouza.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Felipe Fava</strong>
                            <time title='11 de Maio as 8:00h' dateTime='2022-05-11 08:00:10'>Cerca de 1h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}