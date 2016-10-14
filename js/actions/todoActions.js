import axios from 'axios';

export function loadTasks(dispatch){
  axios.get('http://localhost:8090/api/v1/tasks')
  .then(function(response){
    dispatch({type: 'LOAD_TASKS', payload: response.data});
  })
  .catch(function(err){ });
};
