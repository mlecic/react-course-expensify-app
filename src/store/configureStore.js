import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

// Root reducer - All combined
const rootReducer = combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
});

// Store
export default () => {
    const store = createStore(
        rootReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};