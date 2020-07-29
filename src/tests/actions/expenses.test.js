import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const updates = {
        description: 'Some description',
        amount: 1000,
        note: 'Some note'
    }
    const action = editExpense('123abc', updates);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            ...updates
        }
    });
});

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 1000,
        note: 'Some note',
        createdAt: 1000
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with no values provided', () => {
    const action = addExpense();
    expect(action).toEqual({ 
        type: 'ADD_EXPENSE',
        expense: {
            description: '', 
            note: '',
            amount: 0, 
            createdAt: 0,
            id: expect.any(String)
        }
    });
})