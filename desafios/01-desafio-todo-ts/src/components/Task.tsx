import { Trash } from 'phosphor-react';
import { MouseEvent } from 'react';
import { v4 as uuidv4 } from 'uuid'

import styles from './Task.module.css';

interface TaskProps {
  title: string;
  isComplete: boolean;
  onCheckTask: (x: string)=> void;
  onCountCompletes: (x:string)=> void
  onDeleteTask: (x:string)=> void
}

export function Task({title, isComplete, onCheckTask, onCountCompletes, onDeleteTask}: TaskProps) {
  
  function handleCompletedChange(event: MouseEvent<HTMLInputElement>) {
    onCheckTask(title)

    onCountCompletes(title)

    console.log(onCheckTask(title))
  }

  function handleDeleteTask() {

    onDeleteTask(title);
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
      <button onClick={handleDeleteTask} title="Deletar tarefa">
        <Trash size={20} />
      </button>
    </div>
  );
}

