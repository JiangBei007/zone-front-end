const istate = {
	num:0,
}


function reducer(state= istate,action){
	switch (action.type){
		case "addNum":
			return {
				...state,
				num:0,
			}
		default:
		return state;
	}
}

export default reducer