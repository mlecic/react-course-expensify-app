import React from 'react';
import { shallow } from 'enzyme';
// import expenses from '../fixtures/expenses';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render summary for single expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={500} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render summary for multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={1000} />);
    expect(wrapper).toMatchSnapshot();
});