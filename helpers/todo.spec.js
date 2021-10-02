import * as todo from './todo'

const list = [
  {
    id: 1,
    name: 'Task 1',
    done: false,
    user: 'Gaston'
  },
  {
    id: 2,
    name: 'Task 2',
    done: false,
    user: 'Ramon'
  }
]
describe('Helpers todo', () => {
  test('Test findTask function, must return an element from a list filtered of ID', () => {
    const response = todo.findTask(list, 1)

    expect(response.id).toBe(1)
    expect(response.name).toBe('Task 1')
    expect(response.done).toBeFalsy()
    expect(response.user).toBe('Gaston')
  })

  test('Test findTask function, must return empty if the ID not exist', () => {
    const response = todo.findTask(list, 4)

    expect(response).toBeFalsy()
  })

  test('Test deleteTask function, must return a list with 1 element', () => {
    const response = todo.deleteTask(list, 1)

    expect(response.length).toBe(1)
  })

  test('Test editTask function, must return the element was edited', () => {
    const response = todo.editTask(list, 1)

    expect(response.done).toBeTruthy()
  })
})