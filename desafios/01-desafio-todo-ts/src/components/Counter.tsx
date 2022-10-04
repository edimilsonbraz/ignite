import styles from './Counter.module.css';

export function Counter() {
  return (
    <div className={styles.counters}>
      <div className={styles.counterCreated}>
        <p>Tarefas criadas</p>
        <span>5</span>
      </div>
      <div className={styles.counterCompleted}>
        <p>Concluídas</p>
        <span>2 de 5</span>
      </div>
    </div>
  )
}