const POWER = 'POWER';

const initialState = {
	power: true,
	bank: false,
	volume: 50,
}

const switchReducer = (state = initialState, action) => {
	switch (action.type) {
		case POWER:
			return {
				...state,
				power: action.on,
			}
		case 'BANK':
			return {
				...state,
				bank: action.on,
			}
		case 'CHANGE_VOLUME':
			return {
				...state,
				volume: action.newVolume,
			}
		default:
			return state;
	}
}

export default switchReducer;