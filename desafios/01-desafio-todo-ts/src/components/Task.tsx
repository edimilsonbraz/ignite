import { CheckCircle,Circle, Trash } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid'

import styles from './Task.module.css';

interface TaskProps {
  title: string;
  isComplete: boolean;
  onCheckTask: (x: string)=> void;
  onCountCompleted: (x: string)=> void;
  onDeleteTask: (x:string)=> void
}

export function Task({title, isComplete, onCheckTask, onDeleteTask}: TaskProps) {
  
  function handleCompletedChange() {
    onCheckTask(title)
  }

  function handleDeleteTask() {
    onDeleteTask(title);
  }

  const icon = isComplete ? <CheckCircle size={24} weight="fill"/> : <Circle size={24}/>
  
  return (
    <div className={styles.contentTask}>
      <div className={styles.task}>
        <button 
          onClick={handleCompletedChange} 
          className={isComplete ? styles.check : styles.circle}>
          {icon}
        </button>
        
        <span className={styles.check}></span>
        <p className={isComplete ? styles.scratched : styles.fake}>
          {title} 
          {isComplete}
        </p>
      </div>
      <button onClick={handleDeleteTask} title="Deletar tarefa" className={styles.delete}>
        <Trash size={20} />
      </button>
    </div>
  );
}

