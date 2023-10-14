// console.log(window);

// console.log(Object.getOwnPropertyNames(window));

// LOCAL STORAGE METHODS
// setItem(): Add key and value to localStorage
// getItem(): This is how you get items from localStorage
// removeItem(): Remove an item by key from localStorage
// clear(): Clear all localStorage
// key(): Passed a number to retrieve the key of a localStorage

// window.localStorage.setItem("key", "value");

/* window.localStorage.setItem('firstName','Vijay') */

/* console.log(localStorage.getItem('firstName')) */

const person = {
    firstName: 'Vijay',
    lastName: 'Kumar'
}

/* In local storage we can only store strings so we are converting the object to string using stringify method similar we can do it array from array to string */

localStorage.setItem('user1', JSON.stringify(person));
console.log(localStorage.getItem('user1'))

const subjects = ['Html' ,'JS','CSS'];

localStorage.setItem('subjects',JSON.stringify(subjects));
console.log(localStorage.getItem('subjects'))

localStorage.removeItem('subject');
localStorage.clear()

console.log(localStorage.getItem('subjects')) // output is null because the values are removed from localstorage