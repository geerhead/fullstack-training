'use strict';
// https://restcountries.com/v3.1/name/deutschland
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     let currency = Object.keys(data.currencies)[0];
//     let language = Object.keys(data.languages)[0];
//     const html = `
//   <article class="country">
//           <img class="country__img" src=${data.flags.svg} />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(
//               +data.population / 1000000
//             ).toFixed(1)}M people</p>
//             <p class="country__row"><span>🗣️</span>${
//               Object.values(data.languages)[0]
//             }</p>
//             <p class="country__row"><span>💰</span>${Object.keys(
//               data.currencies
//             )}</p>
//           </div>
//         </article>
//   `;
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };
//
// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('cn');
// getCountryData('germany');
//
const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
          <img class="country__img" src=${data.flags.png} />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${Object.keys(
              data.currencies
            )}</p>
          </div>
        </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

const getCountryDataAndNeighbor = function (country) {
  // Ajax call country 2
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    // console.log(data);

    // Render country 1
    renderCountry(data);
    let currency = Object.keys(data.currencies)[0];
    let language = Object.keys(data.languages)[0];

    //Get neighbor country
    const [neighbor] = data.borders;
    if (!neighbor) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      // console.log(data2);
      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryDataAndNeighbor('portugal');
// getCountryDataAndNeighbor('usa');

// const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (
//     response
//   ) {
//     return response.json().then(function (data) {
//       renderCountry(data[0]);
//     });
//   });
// };

const getJSON = function (url, errorMsg = 'Something went wrong.') {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMsg} ${response.status}`);
    }
    return response.json();
  });
};
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders[0];
//       // const neighbour = 'dsdsfsdw';
//       if (!neighbour) return;
//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/name/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Neighboring not found! ${response.status}`);
//       }
//       response.json();
//     })
//     .then(data => renderCountry(...data, 'neighbour'))
//     .catch(err => {
//       console.error(`Error:${err})`);
//       renderError(`Something went wrong.. ${err}`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`)
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;
      // Country 2
      return getJSON(`https://restcountries.com/v3.1/name/${neighbour}`);
    })
    .then(data => renderCountry(...data, 'neighbour'))
    .catch(err => {
      console.error(`Error:${err})`);
      renderError(`Something went wrong.. ${err}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// getCountryData('portugal');
btn.addEventListener('click', function () {
  getCountryData('germany');
});

// getCountryData('dsdsfsdw');
// getCountryData('usa');

///////////////////////////////////////
// Coding Challenge #1

/*
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Drawing the lottery now');
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You WIN!');
//     } else {
//       reject(new Error('You lose!'));
//     }
//   }, 2000);
// });
//
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisfying Set Timeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };
//
// lotteryPromise.resolve('hi').then(res => {
//   console.log(res);
// });
// wait(5).then(() => {
//   console.log('I waited for 2 seconds');
//   return wait(1);
// });

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));
