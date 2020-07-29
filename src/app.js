import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense, removeExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

// Components
import AppRouter from './routers/AppRouter';

// Styles
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 11500, createdAt: 1500 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 20500, createdAt: 180 }));
store.dispatch(addExpense({ description: 'Rent', amount: 413500, createdAt: 45 }));

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(
    jsx,
    document.getElementById('app')
);