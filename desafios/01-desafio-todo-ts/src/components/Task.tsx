import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

export function Task() {
  return (
    <div className={styles.contentTask}>
      <div className={styles.task}>
        <input type="checkbox" name="" id="" />
        <p>Integer urna interdum massa libero auctor neque turpis turpis semper.</p>
      </div>
      <Trash size={20}/>
    </div>
  );
}

