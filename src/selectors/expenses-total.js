const getExpensesTotal = (expenses) => {
    const expensesAmounts = expenses.map(expense => expense.amount);
    const reducer = (totalAmount, amount) => totalAmount + amount;
    return expensesAmounts.reduce(reducer, 0);
}

export default getExpensesTotal;