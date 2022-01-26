import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo,completeTodo } from '../actions'
import './todo.css'
// import your complete todo action

function Todo(props) {
  const dispatch = useDispatch()
  const { name, completed, index } = props

  const completedClass = completed ? 'completed' : ''
  const textDecoration = completed ? 'todo-completed' : ''
  // Use a class to style the complete button

  return (
    <div className="todo">
      <h1 className={`todo-name ${textDecoration}`}>{name}</h1>
      <button 
        className={`${completedClass}`}
        onClick={() => {
          dispatch(deleteTodo(index))
        }}
      >✖︎</button>
   
      {/* Add a new button to mark a todo as complete */}
      <button 
        className={`${completedClass}`}
        onClick={() => {
          dispatch(completeTodo(index))
        }}
      >Complete</button>
    </div>
  )
}

export default Todo
