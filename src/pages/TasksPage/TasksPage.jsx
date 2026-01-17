import { TasksProvider } from '@/entities/todo'
import ToDo from '@/widgets/ToDo'

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