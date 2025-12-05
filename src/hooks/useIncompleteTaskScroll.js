import { useRef } from 'react'

const useIncompleteTaskScroll = (tasks) => {
  const firsIncompleteTaskRef = useRef(null)
  const firsIncompleteTaskId = tasks.find(({ isDone }) => !isDone)?.id

  return {
    firsIncompleteTaskRef,
    firsIncompleteTaskId,
  }
}

export default useIncompleteTaskScroll