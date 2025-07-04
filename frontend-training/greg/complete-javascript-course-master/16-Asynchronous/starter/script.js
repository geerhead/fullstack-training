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
//
// const whereAmI = function (lat, lng) {
//   const data = fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok) {
//         throw new Error(`Neighboring not found! ${response.status}`);
//       }
//       response.json().then(response => {
//         const { state, country } = response;
//         console.log(`You are in ${state}, ${country}`);
//       });
//     })
//     .catch(err => {
//       console.error(
//         `There was an issue getting the reverse geolocation data: ${err}`
//       );
//     });
// };

// whereAmI(52.508, 13.381);
// whereAmI(52.508, 13.381);
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

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
//
// getPosition().then(pos => console.log(pos));

///////////////////////////////////////
// Coding Challenge #2

/*
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
*/

// const whereAmI = async function (country) {
//   const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//   const data = await res.json();
//   renderCountry(...data);
//   fetch(`https://restcountries.com/v3.1/name/${country}`).then(res =>
//     res.json()
//   );
// };
// console.log('FIRST');

// whereAmI('cn');
//
// console.log(`1: Will get location`);
// const city = whereAmI();
// console.log(city);

// whereAmI('usa')
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2:${err.message}`))
//   .finally(() => console.log(`3: Finished getting location`));

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//     ]);
//     console.log(data.map(d => d[0].capital[0]));
//   } catch (err) {
//     console.error(err);
//   }
// };

// get3Countries('portugal', `canada`, `tanzania`);

// Promise.race

(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/egypt`),
    getJSON(`https://restcountries.com/v3.1/name/mexico`),
  ]);
  console.log(res[0].capital);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took too long'));
    }, sec * 1000);
  });
};

// Promise.race([getJSON(`https://restcountries.com/v3.1/name/usa`), timeout(1)]);
// Promise.race([getJSON(`https://restcountries.com/v3.1/name/usa`), timeout(5)]);

// Promise.allSettled
// Promise.allSettled([
//   Promise.resolve('Success'),
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
// ]).then(res => console.log(...res));

// Promise.all

// Promise.all([
//   Promise.resolve('Success'),
//   Promise.resolve('Success'),
//   Promise.reject('ERROR'),
// ]).then(res => console.log(...res));

// Promise.any

Promise.any([
  Promise.resolve('Success'),
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
]).then(res => console.log(res));
