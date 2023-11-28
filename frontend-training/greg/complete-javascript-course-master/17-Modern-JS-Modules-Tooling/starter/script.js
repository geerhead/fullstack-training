// Import module
// import {
//   addToCart,
//   totalPrice as tp,
//   totalQuantity as tq,
// } from './shoppingCart.js';

// addToCart('tampons', 1);
// console.log(tp);
// console.log(tq);

// import * as ShoppingCart from './shoppingCart.js';
//
// console.log('Importing Module');
// console.log(ShoppingCart.totalQuantity);

// Default import
import sc, { cart } from './shoppingCart.js';

sc('pizza', 2);
console.log(cart);

// console.log('Start fetching');
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();

// Not very clean
// lastPost.then(last => console.log(last));

// Top level await
const lastPost2 = await getLastPost();
console.log(lastPost2);
