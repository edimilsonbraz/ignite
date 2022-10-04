import { PlusCircle } from 'phosphor-react';

import { Header } from './components/Header';
import { Task } from './components/Task';

import styles from './App.module.css';
import './global.css'
import { Counter } from './components/Counter';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.container}>
        <div className={styles.contentInput}>
          <input type="text" placeholder='Adicione uma nova tarefa'/>
          <button type="button">Criar  <PlusCircle size={20} /></button>   
        </div>

        <Counter />

        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </div>

    </div>
  )
}


