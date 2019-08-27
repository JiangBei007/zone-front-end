const count = {
	num:2,
};
const reducer = (state=count, action) => {
  switch (action.type) {
    case 'add':
       let num = state.num+1;
       return{
       	num:num
       }
    default: 
      return state;
  }
};

export default reducer;