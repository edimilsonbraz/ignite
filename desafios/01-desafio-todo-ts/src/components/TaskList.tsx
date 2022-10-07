import { PlusCircle } from 'phosphor-react'
import { v4 as uuidv4 } from 'uuid'

import { ChangeEvent, FormEvent, useState } from 'react'
import { Task } from './Task'

import clipboard from '../assets/clipboard.svg';
import styles from './TaskList.module.css'

export function TaskList() {
  interface Props {
    title: string;
    isComplete: boolean;
  }

  
  const [newTaskText, setNewTaskText] = useState('');
  const [tasks, setTasks] = useState<Props[]>([]);
  const [countTasks, setCountTasks] = useState(0);
  const [completedTasks, setCompletedTasks] = useState(0)

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    
    setTasks([{title: newTaskText, isComplete: false}, ...tasks]);

    setCountTasks(tasks.length + 1)
    
    setNewTaskText('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    
    //pega o valor digitado do input
    setNewTaskText(event.target.value)
  }
  
  function checkTask(taskClicked: string) {
    const filterTasks = tasks.filter(task => task.title !== taskClicked)
    const changeTask = tasks.find(task => task.title === taskClicked)!
    setTasks([...filterTasks, {title: changeTask.title, isComplete: !changeTask.isComplete}])

    countCompleted(taskClicked);
   
  }

  function countCompleted(task: string) {
    if(completedTasks < countTasks) {
      setCompletedTasks(completedTasks + 1) 
    }
  }
  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.title !== taskToDelete
    })

    setTasks(tasksWithoutDeletedOne);

    setCountTasks(tasks.length - 1)

    if(completedTasks > 0) {

      setCompletedTasks(completedTasks - 1)
    }
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
          <span>{countTasks}</span>
        </div>
        <div className={styles.taskCompleted}>
          <p>Concluídas</p>
          <span>{completedTasks} de {countTasks}</span>
        </div>
      </div>

      {
        tasks.length !== 0 ? (
          tasks.map((task) => {
            return (
              <Task
                key={uuidv4()}
                title={task.title}
                isComplete={task.isComplete}
                onCheckTask={checkTask}
                onCountCompleted={countCompleted}
                onDeleteTask={deleteTask}
              />
            )
          })
        ) : (
          <div className={styles.homeScreen}>
            <img src={clipboard} alt="Clipboard icon" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        )
      }
    </>
  )
}
