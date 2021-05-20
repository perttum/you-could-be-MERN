import exampleService from '../services/exampleService'

const exampleReducer = (state = null, action) => {
  switch(action.type){
    case 'SET_EXAMPLE':
      console.log('action.data in exampleReducer: ', action.data)
      
      return action.data

    default: return state
  }
}

export const initializeExample = () => {

  return async dispatch => {
    const exampleData = await exampleService.getExampleData()
    console.log('data in initializeExample (reducer action call): ', exampleData)

    dispatch({
      type: 'SET_EXAMPLE',
      data: exampleData
    })
  }
}

export default exampleReducer