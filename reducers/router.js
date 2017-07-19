import { CHANGE_ROUTER } from '../actions/router';

const initialState = {
	router: 'HOME',
};

export default function router(state = initialState, action) {
	switch (action.type) {
		case CHANGE_ROUTER:
			return {
				...state,
				router: action.router,
			};
		default:
			return {
				...state,
				router: 'HOME',
			};
	};
}
