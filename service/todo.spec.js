import {loadData, setData} from '../data/localStorage'
import {editTask, deleteTask} from '../helpers/todo'
import * as todo from '@/service/todo'

jest.mock('../data/localStorage', () => ({
  loadData: jest.fn(),
  setData: jest.fn()
}))

jest.mock('../helpers/todo', () => ({
  editTask: jest.fn(),
  deleteTask: jest.fn()
}))

setData.mockImplementation(() => jest.fn())

const dataOriginal = {
  id: 1,
  name: 'Task',
  done: false,
  user: 'Gaston'
}

describe('Service todo', () => {
  test('Test getData function, Should return data', async () => {
    loadData.mockImplementation(() => [dataOriginal])

    const response = await todo.getData()
    expect(loadData).toHaveBeenCalled()
    expect(response[0].id).toBe(1);
    expect(response[0].name).toBe('Task');
    expect(response[0].done).toBeFalsy();
    expect(response[0].user).toBe('Gaston');
  })

  test('Test doneTask function, Should modify the property done for the element of the list', async () => {
    const dataModify = {
      id: 1,
      name: 'Task',
      done: true,
      user: 'Gaston'
    }

    editTask.mockImplementation(() => dataModify)
    loadData.mockImplementation(() => [dataOriginal])

    const response = await todo.doneTask(dataModify.id)

    expect(editTask).toHaveBeenCalled()
    expect(setData).toHaveBeenCalled()
    expect(loadData).toHaveBeenCalled()
    expect(response[0].id).toBe(1)
    expect(response[0].name).toBe('Task')
    expect(response[0].done).toBeTruthy()
    expect(response[0].user).toBe('Gaston')
  })

  test('Test removeTask function, Should remove the element of the list', async () => {
    deleteTask.mockImplementation(() => [])
    loadData.mockImplementation(() => [dataOriginal])
    
    const response = await todo.removeTask(dataOriginal.id)

    expect(deleteTask).toHaveBeenCalled()
    expect(setData).toHaveBeenCalled()
    expect(loadData).toHaveBeenCalled()
    expect(response.length).toBe(0)
  })

  test('Test addTask function, Should add a new element in the list', async () => {
    loadData.mockImplementation(() => [])

    const data = {
      name: 'Task',
      user: 'Gaston'
    }
    const response = await todo.addTask(data)

    expect(setData).toHaveBeenCalled()
    expect(loadData).toHaveBeenCalled()
    expect(response.length).toBe(1)
    expect(response[0].id).toBe(0)
    expect(response[0].name).toBe('Task')
    expect(response[0].done).toBeFalsy()
    expect(response[0].user).toBe('Gaston')
  })
})