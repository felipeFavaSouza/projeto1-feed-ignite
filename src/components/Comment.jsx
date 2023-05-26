import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { useState } from 'react'
import { Avatar } from './Avatar';

export function Comment() {
    const [aplaudirNum, setAplaudirNum] = useState(0); 

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

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button onClick={() => setAplaudirNum(aplaudirNum + 1)}>
                        <ThumbsUp />
                        Aplaudir <span>{aplaudirNum}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}