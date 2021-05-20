import axios from 'axios'
const baseUrl = '/api/example'

const getExampleData = async () => {
  try{
    const response = await axios.get(baseUrl)
    console.log('response in getExampleData service: ', response)
    return response.data.example
  } catch(err){
    console.log('error at getExampleData: ', err)
  }
}

const exports = {
  getExampleData
}

export default exports