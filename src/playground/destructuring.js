// Object destructuring
const person = {
    name: 'Mirko',
    age: 34,
    location: {
        city: 'Belgrade',
        temp: 28
    }
}

const { name = 'Anonymous', age } = person; // name defaults to Anonymous
const { city, temp: temperature } = person.location; // temp is renamed tp temperature

console.log(`${name} is age ${age}.`);
console.log(`It's ${temperature} in ${city}`);

// Array destructuring
const address = ['Danila Lekica 23', 'Belgrade', 'Serbia', '11000'];

const [street, place, state, zip] = address; // this should skip place var - [street, ,state, zip]
console.log(`You are in ${street}, ${state}`);