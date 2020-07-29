import moment from 'moment';

const initState = {
    filters: {
        text: '',
        sortBy: 'date', // date or amount
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
}

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

export default filtersReducer;