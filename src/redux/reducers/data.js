const dstate = {
	showLoading:false,
}


function reducer(state= dstate,action){
	switch (action.type){
		case "OPEN":
		return {
			...state,
			showLoading:true
		}
		case "CLOSE":
		return {
			...state,
			showLoading:false
		}
		default:
			return state;
	}
}

export default reducer