import { applyMiddleware, createStore } from 'redux';
import reducers from '../reducers';

const logger = store => next => action => {
		if (typeof action === 'function') console.log('dispatching a function');
		else console.log('dispatching', action);
		let result = next(action);
		console.log('next state', store.getState());
		return result;
}

let middlewares = [
		
];

let creatAppStore = applyMiddleware(...middlewares)(createStore);

export default function configureStore(onComplete: () => void) {
		const store = creatAppStore(reducers);
		return store;
}