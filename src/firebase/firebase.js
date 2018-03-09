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

database.ref().on('value', (snapshot) => {
  console.log(snapshot.val());
});

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
