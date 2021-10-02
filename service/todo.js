import { loadData, setData } from '@/data/localStorage'
import { editTask, deleteTask } from '@/helpers/todo'

export async function getData() {
  return await loadData()
}

export async function doneTask(taskId) {
  const list = await loadData()

  const modifyTask = editTask(list, taskId)
  const modifyList = list.map(elem => {
    let data = elem
    if(elem.id === modifyTask.id) {
      data = modifyTask
    }
    return data
  })

  await setData(modifyList)
  
  return modifyList
}

export async function removeTask(TaskId) {
  const list = await loadData()

  const filteredList = deleteTask(list, TaskId)
  await setData(filteredList)
  
  return filteredList
}

export async function addTask(task) {
  const list = await loadData()
  const dataTask = {
    ...task,
    done: false,
    id: list.length
  }
  list.push(dataTask)
  await setData(list)
  
  return list
}