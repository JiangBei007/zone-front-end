const states = {
	count:0,
	loading:false
};
const reducer = (state=states, action) => {
  switch (action.type) {
    case 'increment':
       let count = state.count+action.gun;
       return{
       	...state,
       	count:count
       }
    default: 
      return state;
  }
};
export default reducer;