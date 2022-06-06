import axios from 'axios';

const URL = 'http://localhost:8000' ;

export const reportUserActivity = async(data) => {
  try{
    return await axios.post(`${URL}/report`, data)
  } catch (error){
    console.log('Error while calling report api', error)
  }
}

