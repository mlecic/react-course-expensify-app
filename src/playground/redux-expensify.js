import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Init state
const initState = {
    expenses: [],
    filters: {
        text: '',
        sortBy: 'date', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}

// Action generators
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date
})

const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date
})

// Expenses reducer
const expensesReducer = (stateExpenses = initState.expenses, action) => {
    switch(action.type){
        case 'ADD_EXPENSE': {
            return [...stateExpenses, action.expense]
        }
        case 'REMOVE_EXPENSE': 
            return stateExpenses.filter(expense => expense.id !== action.id);
        case 'EDIT_EXPENSE':
            return stateExpenses.map(expense => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else{
                    return expense;
                }
            })
        default:
            return stateExpenses;
    }
};

// Filters reducer
const filtersReducer = (stateFilters = initState.filters, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {
                ...stateFilters,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...stateFilters,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...stateFilters,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...stateFilters,
                startDate: action.date
            }
        case 'SET_END_DATE':
            return {
                ...stateFilters,
                endDate: action.date
            }
        default:
            return stateFilters;
    }
}

// Get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {

    return expenses.filter(expense => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = text === '' || expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

// Root reducer - All combined
const rootReducer = combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
});

// Store
const store = createStore(rootReducer);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

// Dispatch actions
const actionOne = store.dispatch(addExpense({ description: 'Rent', amount: 1000, createdAt: -21000 }));

const actionTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 100, createdAt: -1000 }));

// const actionThree = store.dispatch(removeExpense({ id: actionOne.expense.id }));

// const actionFour = store.dispatch(editExpense(actionTwo.expense.id, { amount: 500 }));

// const actionSix = store.dispatch(setTextFilter('rent'));

// const actionSeven = store.dispatch(setTextFilter());

const actionEight = store.dispatch(sortByAmount());

// const actionNine = store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));

// store.dispatch(setStartDate());

// store.dispatch(setEndDate(1250));

// store.dispatch(setTextFilter('ff'));