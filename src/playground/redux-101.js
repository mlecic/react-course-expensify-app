import { createStore } from 'redux';

const initState = { 
    count: 0
}

// Action generators - payload object is destructured
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count }) => ({
    type: 'SET',
    count
})

const resetCount = () => ({
    type: 'RESET',
    count: 0
})

// Reducers
const countReducer = (state = initState, action) => {
    switch(action.type) {
        case 'INCREMENT': {
            return {
                count: state.count + action.incrementBy
            }
        }
        case 'DECREMENT': {
            return {
                count: state.count - action.decrementBy
            }
        }
        case 'SET':
        case 'RESET': 
            return {
                count: action.count
            }
        default:
            return state;
    }
}

// Store
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})

// Dispatch actions
store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount({ decrementBy: 45 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 1500 }));
