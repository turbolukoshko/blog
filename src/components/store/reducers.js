export function promiseReducer(state, action){
  if (!state){
      return {}
  }
  if(action.type === 'PROMISE'){
    return {...state, [action.name]: {status: action.status, payload: action.payload, error: action.error}}
  }
  return state;
}