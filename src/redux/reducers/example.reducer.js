
function example(state=[], action){
    switch(action.type){
      case 'RESET_SENHA':
        return action.response.data;
      default:
        return state;
    };
}
export default example;