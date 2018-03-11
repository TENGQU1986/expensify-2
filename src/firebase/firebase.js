import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD7HIH_CCSEMcBLlHp4c_wRQ1sk4OcYNGQ",
    authDomain: "expensify-61793.firebaseapp.com",
    databaseURL: "https://expensify-61793.firebaseio.com",
    projectId: "expensify-61793",
    storageBucket: "expensify-61793.appspot.com",
    messagingSenderId: "227548607778"
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };





//child_changed
// database.ref('expensify').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expensify')
//   .once('value')
//   .then((snapshot) => {
//   const expenses = [];
//
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expensify').on('value', (snapshot) => {
//   const expenses = [];
//
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expensify').push({
//   description: 'Rent',
//   note: '',
//   amount: 1095,
//   createdAt: 0
// });



// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.log('Error with fetching data', e);
// });

// database.ref().on('value', (snapshot) => {
//   const user = snapshot.val();
//   console.log(`${user.name} is a ${user.job.title} at ${user.location.city}`);
// });
//
// setTimeout(() => {
//   database.ref('job/title').set('ReactJS developer');
//   database.ref('location/city').set('New York');
// }, 5000);



// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);
//
// setTimeout(() => {
//   database.ref().off();
// }, 7000);
//
// setTimeout(() => {
//   database.ref('age').set(32);
// }, 10500);

// database.ref().set({
//   name: 'Patrick',
//   age: 30,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Kearny',
//     country: 'US'
//   }
// }).then(() => {
//   console.log('data is seved');
// }).catch((e) => {
//   console.log('This failed', e);
// });
//
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref('isSingle').remove().then(() => {
//   console.log('Remove succeeded');
// }).catch((e) => {
//   console.log('Removed failed', e);
// })
