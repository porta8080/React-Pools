const poolReducer = function(state={pools: []},action){
  switch(action.type){
    case 'LOAD_POOLS':
    return Object.assign({},state,{pools: action.payload});
    break;
  }

  return state;
};

export default poolReducer;
