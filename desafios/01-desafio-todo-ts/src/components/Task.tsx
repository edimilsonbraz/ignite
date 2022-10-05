import { Trash } from 'phosphor-react';
import styles from './Task.module.css';
interface infoTask {
  title: string;
  isComplete: boolean;
}

export function Task({title, isComplete} : infoTask) {
  return (
    <div className={styles.contentTask}>
      <div className={styles.task}>
        <input type="checkbox" name="" id="" />
        <span className={styles.check}></span>
        <p>{title} {isComplete}</p>
      </div>
      <button>
        <Trash size={20}/>
      </button>
    </div>
  );
}

