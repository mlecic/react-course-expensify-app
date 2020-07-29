import moment from 'moment';
import getVisibleExpenses from '../../selectors/expenses';
import expensesMock from '../fixtures/expenses';

test('should filter by text value', () => {
    const filters = {
        text: 'c',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }

    const result = getVisibleExpenses(expensesMock, filters);
    expect(result).toEqual([expensesMock[2], expensesMock[1]]);
});

test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = getVisibleExpenses(expensesMock, filters);
    expect(result).toEqual([expensesMock[2], expensesMock[1]]);
});

test('should filter by endDate', () => {
    const filters = {
        text: '',
        sortby: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    const result = getVisibleExpenses(expensesMock, filters);
    expect(result).toEqual([expensesMock[0], expensesMock[1]]);
});

test('should apply sortBy date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleExpenses(expensesMock, filters);
    expect(result).toEqual([expensesMock[2], expensesMock[1], expensesMock[0]]);
});

test('should apply sortBy amount', () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleExpenses(expensesMock, filters);
    expect(result).toEqual([expensesMock[0], expensesMock[1], expensesMock[2]]);
});

