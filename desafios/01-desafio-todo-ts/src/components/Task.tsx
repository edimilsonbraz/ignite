import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

export function Task() {
  return (
    <div className={styles.contentTask}>
      <div className={styles.task}>
        <input type="checkbox" name="" id="" />
        <span className={styles.check}></span>
        <p>Integer urna interdum massa libero auctor neque turpis turpis semper.</p>
      </div>
      <button>
        <Trash size={20}/>
      </button>
    </div>
  );
}

