import React, { Component } from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export class ExpensesSummary extends Component {
    render() {
        const { expensesCount, expensesTotal } = this.props;
        return (
            <div>
                <p>
                    { 
                        expensesCount > 1 ?
                        `Viewing ${expensesCount} expenses totalling ${numeral(expensesTotal / 100).format('$0,0.00')}` :
                        `Viewing ${expensesCount} expense totalling ${numeral(expensesTotal / 100).format('$0,0.00')}`
                    }
                 </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const expensesSelected = selectExpenses(state.expenses, state.filters);
    return {
        expensesCount: expensesSelected.length,
        expensesTotal: selectExpensesTotal(expensesSelected)
    }
}

export default connect(mapStateToProps)(ExpensesSummary);
