import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA_AKaIemdV5rql8HkFuCLyuKTiY_NjOBI",
    authDomain: "mirko-react-app-expensify.firebaseapp.com",
    databaseURL: "https://mirko-react-app-expensify.firebaseio.com",
    projectId: "mirko-react-app-expensify",
    storageBucket: "mirko-react-app-expensify.appspot.com",
    messagingSenderId: "943466037875",
    appId: "1:943466037875:web:759da55e7abdea1dae6006"
}

firebase.initializeApp(firebaseConfig);

// Use of real time database - not firestore
const database = firebase.database();

// const onExpenseChangeSubscription = database.ref('expenses').on('value', snapshot => {
//         let expenses = [];
//         snapshot.forEach(childSnapshot => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses);
//     }
// );

const onExpenseChangeSubscription = database.ref('expenses').on('child_changed', snapshot => {
        console.log(snapshot.key, snapshot.val());
    }
);

setTimeout(() => {
    // close subscription
    database.ref().off('value', onExpenseChangeSubscription);
    console.log('Subscription ended');
}, 60000);

// database.ref('expenses').push({
//     description: 'SBB bill',
//     note: 'Dont forget to pay it on time',
//     amount: 3000,
//     createdAt: 5000
// });

// New property on ref
// database.ref('notes').push({
//     title: 'Courses',
//     body: 'Typescript, Docker'
// })

// const onValueChangeSubscription = database.ref().on('value', (snapshot) => {
//     const user = snapshot.val();
//     console.log(`${user.name} is a ${user.job.title} at ${user.job.company}`);
// });

// setTimeout(() => {
//     // close subscription
//     database.ref().off('value', onValueChangeSubscription);
//     console.log('Subscription ended');
// }, 60000);

// database.ref().once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// })
// .catch((e) => {
//     console.log('Error fetching data', e);
// })

// database.ref().set({
//     name: "Mirko Lecic",
//     age: 34,
//     stressLevel: 6,
//     location: {
//         city: "Belgrade",
//         coutry: "Serbia"
//     },
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     }
// }).then(() => {
//     console.log('New user succesfuly set.');
// }).catch(error => {
//     console.log('Something went wrong', error);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })

// database.ref('born').remove().then(() => {
//     console.log('Born field removed');
// }).catch(error => console.log(error));