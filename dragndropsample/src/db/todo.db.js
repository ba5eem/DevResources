let todoFromFakeDB = [{
    id: 1,
    name: 'Poop',
    weight: 0.1,
    type: 'high priority'
  },
  {
    id: 2,
    name: 'More Poop',
    weight: 10,
    type: 'low priority'
  },
  {
    id: 3,
    name: 'Holy shit poop',
    weight: 2,
    type: 'OH SHIT'
  }
]

let newId = 4

export const getTodoFromFakeXHR = () => new Promise((resolve, reject) => {
  setTimeout( () => {
    resolve(todoFromFakeDB.slice())
  }, 500)
})

export const addTodoToFakeXHR = (todo) => new Promise((resolve, reject) => {
  setTimeout( () => {
    todo.id = newId;
    newId++;
    todoFromFakeDB.push(todo);
    console.log('To-do itemFromFakeDB', todoFromFakeDB)
    resolve(todoFromFakeDB)
  },500)
})

export const getTodoByIdFromFakeXHR = (todoId) => new Promise( (resolve, reject) => {
  setTimeout( () => {
    const todoResponse = todoFromFakeDB.find( todo => todo.id === todoId);
    if (todoResponse) resolve(todoResponse);
    else reject({status: 404, message: 'To-do item not found'})
  }, 500)
})


export const deleteTodoByIdFromFakeXHR = (todoId) => new Promise ( (resolve, reject) => {

// export const deleteItemById = (itemId) => new Promise ( (resolve, reject) => {

  setTimeout( () => {
    const todoIdx = todoFromFakeDB.findIndex( todo => todo.id === todoId);
    if (todoIdx === -1) {
      reject({status: 500, message: 'To-do item not found'})
    } else {
      todoFromFakeDB = todoFromFakeDB.filter( todo => {
        return todo.id !== todoId
      })
      console.log('To-do itemsFromFakeDB', todoFromFakeDB)
      console.log('todoIdx', todoIdx)
      resolve({status: 'ok'})
    }
  })
})