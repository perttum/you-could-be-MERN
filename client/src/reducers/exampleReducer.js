import exampleService from '../services/exampleService'

const exampleReducer = (state = [], action) => {
  switch(action.type){
    case 'INITIALIZE_SHOUTS': {
      console.log('action.data in exampleReducer: ', action.data)
      // const newState = [...action.data]
      // console.log('newState in exampleReducer: ', newState)
      return action.data
    }

    default: return state
  }
}

export const initializeShouts = () => {

  return async dispatch => {
    const shouts = await exampleService.getShouts()
    console.log('data in initializeShouts (reducer action call): ', shouts)
    // const d = [...shouts]
    dispatch({
      type: 'INITIALIZE_SHOUTS',
      data: shouts
    })
  }
}

export const createNewShout = (shout) => {
  
  return async dispatch => {
    const newShout = await exampleService.createShout(shout)
    console.log('data in createNewShout (reducer action call): ', newShout)
    const shouts = await exampleService.getShouts()

    dispatch({
      type: 'INITIALIZE_SHOUTS',
      data: shouts
    })
  }
}

export default exampleReducer