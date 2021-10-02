export function findTask(list, id) {
  return list.find(i => i.id === id)
}

export function editTask(list, id) {
  const findedTask = findTask(list, id)
  findedTask.done = true

  return findedTask
}

export function deleteTask(list, id) {
  return list.filter(i => i.id !== id)
}
