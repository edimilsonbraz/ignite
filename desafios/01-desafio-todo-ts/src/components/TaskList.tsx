import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Task } from './Task'
import styles from './TaskList.module.css'

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
  }
]

export function TaskList() {
  const [newTaskText, setNewTaskText] = useState('');

  const [tasks, setTasks] = useState(['']);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    
    // const newTask = {
    //   id: uuidv4(),
    //   title: newTaskText,
    //   isComplete: false
    // }
    
    setTasks([...tasks, newTaskText]);

    setNewTaskText('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    
    //pega o valor digitado do input
    setNewTaskText(event.target.value)
  }

  return (
    <>
      <form onSubmit={handleCreateNewTask} className={styles.contentInput}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTaskText}
          onChange={handleNewTaskChange}
          required
        />
        <button type="submit" disabled={setNewTaskText.length === 0}>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>

      <div className={styles.counters}>
        <div className={styles.taskCreated}>
          <p>Tarefas criadas</p>
          <span>5</span>
        </div>
        <div className={styles.taskCompleted}>
          <p>Concluídas</p>
          <span>2 de 5</span>
        </div>
      </div>

      {
        tasks.length !== 0 ? (
          tasks.map((task) => {
            return (
              <Task
                key={task}
                title={task}
                isComplete={false}
              />
            )
          })
        ) : (
          <div className={styles.homeScreen}>
            <img src="clipboard.svg" alt="Clipboard icon" />
            <strong className="mt-4">
              Você ainda não tem tarefas cadastradas
            </strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        )
      }
    </>
  )
}
