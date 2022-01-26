import { NEW_TODO, DELETE_TODO, COMPLETE_TODO } from '../actions'
// import the new action

const todoReducer = (state = [], action) => {
  switch(action.type) {
    case NEW_TODO: 
      return [...state, action.payload]
    
    case DELETE_TODO: 
      const newState = state.filter((item, i) => {
        return i !==  action.payload.index 
      })
      return newState

    // Add a new case to handle the action
    case COMPLETE_TODO:
      const updateState = state.map((item, i) => {
        if (i === action.payload.index) {
          console.log(item)
          item.completed = true
        }
        return item
      })
      return updateState
    default: 
      return state
  }
}

export default todoReducer
