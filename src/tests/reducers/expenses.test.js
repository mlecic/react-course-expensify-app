import expensesReducer from '../../reducers/expenses';
import expensesMock from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expensesMock[1].id
    }
    const state = expensesReducer(expensesMock, action);
    expect(state).toEqual([expensesMock[0], expensesMock[2]]);
});

test('should NOT remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '354'
    }
    const state = expensesReducer(expensesMock, action);
    expect(state).toEqual(expensesMock);
});

test('should add new expense', () => {
    const newExpense = {
        id: '123',
        description: 'Another expense',
        note: '',
        amount: 10000,
        createdAt: 0
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    }
    const state = expensesReducer(expensesMock, action);
    expect(state).toEqual([...expensesMock, newExpense]);
});

test('should edit existing expense by id', () => {
    const updatesData = { note: 'This is some note' }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expensesMock[1].id,
        updates: updatesData
    }
    const state = expensesReducer(expensesMock, action);
    expect(state[1]).toEqual({ ...state[1], ...updatesData });
});

test('should NOT edit existing expense with no existing id', () => {
    const updatesData = { note: 'This is some note' }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: updatesData
    }
    const state = expensesReducer(expensesMock, action);
    expect(state).toEqual(expensesMock);
});