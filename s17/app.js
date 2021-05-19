/* eslint-disable arrow-body-style */

const renderCountry = (data, className = "") => {
  const countryElm = document.querySelector(".countries");
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countryElm.insertAdjacentHTML("beforeend", html);
  countryElm.style.opacity = 1;
};

// // AJAX Calls
// // XMLHttpRequest - XHR
// // old way, not common anymore
// const getCountryData = (country) => {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//     request.send();

//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);
//         renderCountry(data);
//     });
// };

// getCountryData('turkey');

// const request = fetch("https:restcountries.eu/rest/v2/name/turkey");
// console.log(request);

// request
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     renderCountry(data[0]);
//   });

// const getCountryData = (country) => {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then((response) => {
//       // console.log(response);
//       if (!response.ok)
//         throw new Error(`sthg went wrong Error ${response.status}`);
//       return response.json();
//     })
//     .then((data) => {
//       // console.log(data);
//       renderCountry(data[0]);
//     })
//     .catch((err) => console.log(err.message));
// };

// getCountryData("Turkey");
// // getCountryData("Germany");

// const getCountryNeighbourData = (country) => {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then((response) => {
//       // console.log(response);
//       if (!response.ok)
//         throw new Error(`sthg went wrong Error ${response.status}`);
//       return response.json();
//     })
//     .then((data) => {
//       // console.log(data);
//       renderCountry(data[0]);
//     })
//     .catch((err) => console.log(err.message));
// };

// getCountryNeighbourData("Turkey");
// // getCountryData("Germany");

// const flipCoinPromise = new Promise((resolve, reject) => {
//   console.log("welcome the toss game");
//   console.log("flipping the coin");
//   setTimeout(() => {
//     Math.random() >= 0.5
//       ? resolve("here head comes! you Win!")
//       : reject(new Error("tail comes"));
//     console.log(Math.random());
//   }, 3000);
// });

// flipCoinPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err.message));

// const wait = (seconds) => {
//   return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
// };
// wait(1)
//   .then(() => {
//     console.log("1 sec passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("2 sec passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("3 sec passed");
//     return wait(1);
//   })
//   .then(() => {
//     console.log("4 sec passed");
//     return wait(1);
//   });

const getCountryNeighbourDataAsync = async (country) => {
  try {
    let response = await fetch(
      `https://restcountries.eu/rest/v2/name/${country}`
    );
    console.log(response);
    if (!response.ok) throw new Error(`Sth went wrong ${response.status}`);

    let data = await response.json();

    renderCountry(data[0]);

    const neighbour = data[0].borders[0];

    response = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${neighbour}`
    );

    if (!response.ok) throw new Error(`No neighbour ${response.status}`);
    data = await response.json();

    renderCountry(data, "neighbour");
  } catch (err) {
    console.log(err.message);
  }
};

getCountryNeighbourDataAsync("France");

async function displayImages() {
  let img = await createImage("images/image1.jpg");
  console.log("Image 1 loaded");
  await wait(3);
  img.style.display = "none";
  img = await createImage("images/image2.jpg");
  console.log("Image 2 loaded");
  await wait(3);
  img.style.display = "none";
}

const loadNImages = async function (number) {
  const imagePaths = Array.from(
    { length: number },
    (_, index) => `images/image${index + 1}.jpg`
  );

  console.log(imagePaths);

  const images = imagePaths.map((img) => createImage(img));
  console.log(images);
  const imageElms = await Promise.all(images);
  console.log(imageElms);
  imageElms.forEach((img) => img.classList.add("parallel"));
};

loadNImages(6);
