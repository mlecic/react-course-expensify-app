const initState = {
    expenses: []
}

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

export default expensesReducer;