import { TasksProvider } from '../context/TasksContext'
import ToDo from '../components/ToDo'

const TasksPage = () => {
  return (
    <div>
      <TasksProvider>
        <ToDo />
      </TasksProvider>
    </div>
  )
}

export default TasksPage