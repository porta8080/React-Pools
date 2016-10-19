import axios from 'axios';

export function loadPools(dispatch){
  axios.get('http://localhost:8080/api/pools')
  .then(function(response){
    dispatch({type: 'LOAD_POOLS', payload: response.data});
  })
  .catch(function(err){ });
};
