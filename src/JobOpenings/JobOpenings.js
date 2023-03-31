import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
  headers: {
    'X-RapidAPI-Key': 'f26fb09eb3msh3d4336d79d9cef6p1d60b9jsnf70a1205ee86',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  }
};

 let axiosDataPromise = () => {
  // create a promise for the axios request
  const promise = axios.request(options);

  // using .then, create a new promise which extracts the data
  const dataPromise = promise.then((response) => response.data.data)

  // return it
  return dataPromise
}



const cardContainer = document.getElementById("card-container");
const loader = document.getElementById("loader");
const results = document.getElementById("results");

var cardLimit = 10;
const cardIncrease = 2;
const pageCount = Math.ceil(cardLimit / cardIncrease);
let currentPage = 1;

var throttleTimer;
const throttle = (callback, time) => {
  if (throttleTimer) return;

  throttleTimer = true;

  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, time);
};

const getRandomColor = () => {
  const h = Math.floor(Math.random() * 360);

  return `hsl(${h}deg, 90%, 85%)`;
};

const createCard = (jobT,jobL,jobD) => {

  
  const card = document.createElement("div");
  const jobTitle = document.createElement("div");
  const jobLocation = document.createElement("div");
  const jobDesc = document.createElement("p");

  card.className = "card";
  jobTitle.className = "jobTitle";
  jobLocation.className = "jobLocation";
  jobDesc.className = "jobDescription";


  jobTitle.innerHTML = jobT;
  jobLocation.innerHTML = jobL;
  jobDesc.innerHTML = jobD;

  card.style.backgroundColor = getRandomColor();
  cardContainer.appendChild(card);
  card.appendChild(jobTitle);
  card.appendChild(jobLocation);
  card.appendChild(jobDesc);


};

const addCards = (pageIndex) => {

  currentPage = pageIndex;

  const startRange = (pageIndex - 1) * cardIncrease;

  const endRange = currentPage == pageCount ? cardLimit : pageIndex * cardIncrease;

  // for(let i = startRange ; i < endRange ;i++){
  //   console.log(i);
  //   // createCard(data[i]["name"],data[i]["country"],data[i]["region"]);

  // }

  axiosDataPromise()

  .then((data) => {

    for(let i = startRange ; i <endRange ;i++){
      console.log(i);
      createCard(data[i]["name"],data[i]["country"],data[i]["region"]);

    }

      // console.log(data[1]["name"]);
  })
  .catch(err => console.log(err))

  if(cardLimit <= cardIncrease){

    console.log("stop");
    removeInfiniteScroll();

  }
};

const handleInfiniteScroll = () => {

  
  throttle(() => {
    const endOfPage = results.scrollHeight - results.offsetHeight - results.scrollTop < 1;

    

    if (endOfPage) {
      console.log(results.scrollHeight + " " + results.offsetHeight + " " + results.scrollTop);
      addCards(currentPage + 1);
    }

    if (currentPage === pageCount) {
      console.log("stop");
      removeInfiniteScroll();
    }
  }, 1000);
};

const removeInfiniteScroll = () => {
  loader.remove();
  results.removeEventListener("scroll", handleInfiniteScroll);
};

window.onload = function () {

  addCards(currentPage);
};

results.addEventListener("scroll", handleInfiniteScroll);

// for(let i = 0 ; i < 5 ; i++){
//   console.log(name[i])
// }

// console.log(name.)
// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
//   headers: {
//     'X-RapidAPI-Key': 'f26fb09eb3msh3d4336d79d9cef6p1d60b9jsnf70a1205ee86',
//     'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
//   const dataLength = response.data.data.length;
//   cardLimit = dataLength;
// 	console.log(dataLength);
// }).catch(function (error) {
// 	console.error(error);
// });
	
