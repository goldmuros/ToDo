const STORAGE_KEY = 'todoKey'
export function loadData() {
  return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
}

export function setData(todos) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
}