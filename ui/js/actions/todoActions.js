import axios from 'axios';

export function loadTasks(dispatch){
  axios.get('http://localhost:8000/api/tasks')
  .then(function(response){
    dispatch({type: 'LOAD_TASKS', payload: response.data});
  })
  .catch(function(err){ });
};

export function createTask(dispatch,data){
  axios.post('http://localhost:8000/api/tasks',data)
  .then(function(response){
    console.log(response)
    dispatch({type: 'ADD_TASK', payload: response.data});
  })
  .catch(function(err){ });
};
