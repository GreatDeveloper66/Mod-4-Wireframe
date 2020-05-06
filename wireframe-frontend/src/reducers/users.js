const UsersReducer = (state={currentuser: ''},action) => {
  switch(action.type){
    case 'users':
      return Object.assign({},state,{currentuser: action.payload})
    default:
      return state
  }
}

export default UsersReducer