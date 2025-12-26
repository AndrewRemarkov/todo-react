import { createContext } from 'react'
import useTasks from '../hooks/useTasks'
import useIncompleteTaskScroll from '../hooks/useIncompleteTaskScroll'

export const TasksContext = createContext({})

export const TasksProvider = (props) => {
  const { children } = props

  const {
    tasks,
    filteredTasks,
    deleteTask,
    deleteAllTasks,
    toggleTaskComplete,
    newTaskTitle,
    setNewTaskTitle,
    searchQuery,
    setSearchQuery,
    newTaskInputRef,
    addTask,
    disappearingTaskId,
    appearingTaskId,
  } = useTasks()

  const {
    firsIncompleteTaskRef,
    firsIncompleteTaskId,
  } = useIncompleteTaskScroll(tasks)

  return (
    <TasksContext.Provider
      value={{
        tasks,
        filteredTasks,
        firsIncompleteTaskRef,
        firsIncompleteTaskId,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
        newTaskTitle,
        setNewTaskTitle,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask,
        disappearingTaskId,
        appearingTaskId,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
