import React from 'react';
import ReactDOM from 'react-dom';
import './firebase/firebase';

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

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(
    jsx,
    document.getElementById('app')
);