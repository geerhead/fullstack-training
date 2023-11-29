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
// import sc, { cart } from './shoppingCart.js';
//
// sc('pizza', 2);
// console.log(cart);

// console.log('Start fetching');
// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);
// console.log('Something');

// const getLastPost = async function () {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//   const data = await res.json();
//   return { title: data.at(-1).title, text: data.at(-1).body };
// };

// const lastPost = getLastPost();

// Not very clean
// lastPost.then(last => console.log(last));

// Top level await
// const lastPost2 = await getLastPost();
// console.log(lastPost2);
//
// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;
//
//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };
//
//   const orderStock = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };
//
//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();
//
// ShoppingCart2.addToCart('pizza', 5);
// ShoppingCart2.addToCart('donut', 10);
// console.log(...ShoppingCart2.cart);

// export.addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to cart`);
//   };
//
// // Import
// const { addToCart } = require('./shoppingCart.js')

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
console.log(state);
const stateClone = Object.assign({}, state);
console.log(stateClone);
state.user.loggedIn = false;
console.log(stateClone);
