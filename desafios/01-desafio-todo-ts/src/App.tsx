import { ChangeEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';

import { Header } from './components/Header';
import { Task } from './components/Task';

import styles from './App.module.css';
import './global.css'

import { Counter } from './components/Counter';

const tasks = [
  {
    id: uuidv4(),
    title: 'Terminar o desafio',
    isComplete: true
  },
  {
    id: uuidv4(),
    title: 'Estudar TypeScript',
    isComplete: false
  },
  {
    id: uuidv4(),
    title: 'Estudar ReactJs',
    isComplete: false
  },
]


export function App() {
  const [newTaskText, setNewTaskText] = useState('');

  const [taskss, setTasks] = useState(['']);

  function handleCreateNewTask() {
    setTasks([...taskss, newTaskText]);

    setNewTaskText('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    //pega o valor digitado do input
    setNewTaskText(event.target.value)
  }

  return (
    <div>
      <Header />

      <div className={styles.container}>
        <div className={styles.contentInput}>
          <input 
            type="text" 
            placeholder='Adicione uma nova tarefa'
            value={newTaskText}
            onChange={handleNewTaskChange}           
          />
          <button type="button" onClick={handleCreateNewTask}>
            Criar  <PlusCircle size={20} />           
          </button>   
        </div>

        <Counter />

        {/* Percorrendo o Array Task */}
        <main>
          {tasks.map(task => {
              return <Task title={task.title} isComplete={task.isComplete}  key={task.id}/>
            })
          }
        </main>
        
      </div>

    </div>
  )
}


