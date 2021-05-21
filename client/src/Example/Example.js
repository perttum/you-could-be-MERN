import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeShouts, createNewShout } from '../reducers/exampleReducer'
import ShoutList from './ShoutList/ShoutList'

const Example = () => {

  const dispatch = useDispatch()
  const exampleData = useSelector(state => state.example)
  console.log('example data: ', exampleData)
  
  const [shoutInput, setShoutInput] = useState('')

  useEffect(() => {
    dispatch(initializeShouts())
  }, [dispatch])

  const onInput = (e) => {
    e.preventDefault()
    setShoutInput(e.target.value)
  }

  const onSubmitShout = (e) => {
    e.preventDefault()
    const newShout = { shout: shoutInput }
    dispatch(createNewShout(newShout))
    setShoutInput('')
  }

  return(
    <div>
      <form>
      <label htmlFor="input">
        Insert & submit something
      </label>
      <br/>
      <input
        type="text"
        value={shoutInput}
        onChange={onInput}
      />
      <button
        onClick={onSubmitShout}
      >
        submit something
      </button>
      </form>
      
      <ShoutList shouts={exampleData}/>

    </div>
  )
}

export default Example