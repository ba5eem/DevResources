let itemsFromFakeDB = [{
    id: 1,
    task: 'Taking a piss',
    description: 0.1,
    type: 'Todo'
  },
  {
    id: 2,
    task: 'Eating a sandwich',
    description: 10,
    type: 'Doing'
  },
  {
    id: 3,
    task: 'Making a poop',
    description: 2,
    type: 'Done'
  },
  {
    id: 4,
    task: 'Popping champagne',
    description: 0.1,
    type: 'Todo'
  },
  {
   id: 5,
    task: 'Drinking juice',
    description: 0.1,
    type: 'Doing'
  },
  {                
    id: 6,
    task: 'Wear ladies clothing',
    description: 0.1,
    type: 'Done'
  }
]

let newId = 7

export const getItemsFromFakeXHR = () => new Promise((resolve, reject) => {
  setTimeout( () => {
    resolve(itemsFromFakeDB.slice())
  }, 500)
})

const checkFakeXHRForDuplicates = (itemID) => {
        const itemIdx = itemsFromFakeDB[itemsFromFakeDB.length-1].id
        if (itemIdx === itemID) {
            return true
        } else {
            return false
        }
  }

export const addItemToFakeXHR = (item) => new Promise((resolve, reject) => {
    setTimeout( () => {
        item.id = newId;
        if (checkFakeXHRForDuplicates(item.id)){
            newId++;
            reject({status: 500, message: 'Duplicate id'})
        } else {
            newId++;
            itemsFromFakeDB.push(item);
            resolve(itemsFromFakeDB)
        }
    }, 500)
})

export const getItemByIdFromFakeXHR = (itemId) => new Promise( (resolve, reject) => {
  setTimeout( () => {
    const itemResponse = itemsFromFakeDB.find( item => item.id === itemId);
    if (itemResponse) resolve(itemResponse);
    else reject({status: 404, message: 'item not found'})
  }, 500)
})


export const deleteItemByIdFromFakeXHR = (itemId) => new Promise ( (resolve, reject) => {
  setTimeout( () => {
    const itemIdx = itemsFromFakeDB.findIndex( item => item.id === itemId);
    if (itemIdx === -1) {
      reject({status: 500, message: 'item not found'})
    } else {
      itemsFromFakeDB = itemsFromFakeDB.filter( item => {
        return item.id !== itemId
      })
      console.log('itemsFromFakeDB', itemsFromFakeDB)
      console.log('itemIdx', itemIdx)
      resolve({status: 'ok'})
    }
  })
})