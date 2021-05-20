import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeExample } from '../reducers/exampleReducer'

const Example = () => {

  const dispatch = useDispatch()
  const exampleData = useSelector(state => state.example)

  const onClick = (e) => {
    e.preventDefault()
    dispatch(initializeExample())
  }

  return(
    <div>
      { exampleData && <p>{ exampleData }</p> }
      <button
        onClick={onClick}
      >
        Get example data from backend
      </button>
    </div>
  )
}

export default Example