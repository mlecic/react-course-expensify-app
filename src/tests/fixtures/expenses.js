import moment from 'moment';

const expensesMock = [
    {
        id: '1',
        description: 'Rent',
        amount: 20000,
        note: '',
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id: '2',
        description: 'Car fuel',
        amount: 5100,
        note: '',
        createdAt: 0
    },
    {
        id: '3',
        description: 'Lunch',
        amount: 2950,
        note: '',
        createdAt: moment(0).add(4, 'days').valueOf()
    }
];

export default expensesMock;