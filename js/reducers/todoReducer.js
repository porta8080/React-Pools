const todoReducer = function(state={tasks: []},action){
  switch(action.type){
    case 'LOAD_TASKS':
      return Object.assign({},state,{tasks: action.payload});
      break;
    case 'ADD_TASK':
      return Object.assign({},state,{tasks: state.tasks.concat(action.payload)});
      break;
  }

  return state;
};

export default todoReducer;
