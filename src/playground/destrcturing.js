import React from 'react';

const person = {
  name: 'teng',
  age: 32,
  location: {
    city: 'Phili',
    temp: 92
  }
};

console.log(`${person.name} is ${person.age}`);


const book = {
  title: 'ABD',
  author: 'aasdlfkjasdlfkj',
  publish: {
    name: 'Penguin'
  }
};

const { name: publishName = 'self-published' } = book.publish;

console.log(publishName);

const item = ['coffee(hot)', '$2.00', '$2.50', '$2.75'];
const [drink, small, medium, large] = item;
console.log(`${drink} costs ${medium}`);
