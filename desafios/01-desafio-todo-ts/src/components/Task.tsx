import { Trash } from 'phosphor-react';
import { MouseEvent } from 'react';

import styles from './Task.module.css';

interface TaskProps {
  title: string;
  isComplete: boolean;
}

export function Task({title, isComplete}: TaskProps) {
  
  function handleCompletedChange(event: MouseEvent<HTMLInputElement>) {
    console.log(event.target)
  }

  return (
    <div className={styles.contentTask}>
      <div className={styles.task}>
        <input type="checkbox" id="" onClick={handleCompletedChange} />
        <span className={styles.check}></span>
        <p>
          {title} 
          {isComplete}
        </p>
      </div>
      <button>
        <Trash size={20} />
      </button>
    </div>
  );
}

