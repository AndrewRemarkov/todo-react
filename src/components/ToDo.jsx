import AddTaskForm from './AddTaskForm'
import SearchTaskForm from './SearchTaskForm'
import TodoInfo from './TodoInfo'
import TodoList from './TodoList'
import { useContext } from 'react'
import Button from './Button'
import { TasksContext } from '../context/TasksContext'

const ToDo = () => {
  const { firsIncompleteTaskRef } = useContext(TasksContext)

  return (
    <div className="todo">
      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo />
      <Button
        onClick={() => firsIncompleteTaskRef.current?.scrollIntoView({ behavior: 'smooth' })}
      >
        Show first incomplete task
      </Button>
      <TodoList />
    </div>
  )
}

export default ToDo