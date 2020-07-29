import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@init' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        filters: {
            text: '',
            sortBy: 'amount', // date or amount
            startDate: undefined,
            endDate: undefined
        }
    }
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter with provided value', () => {
    const textData = 'bill';
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: textData });
    expect(state.text).toBe(textData);
});

test('should set startDate filter with provided value', () => {
    const dateMock = moment(0);
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', date: dateMock });
    expect(state.startDate).toEqual(dateMock);
})

test('should set endDate filter with provided value', () => {
    const dateMock = moment(0);
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', date: dateMock });
    expect(state.endDate).toEqual(dateMock);
})