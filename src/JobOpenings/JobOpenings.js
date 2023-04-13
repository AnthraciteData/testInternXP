import {app} from "../firebaseInitilization";
import { getDatabase, ref, set } from "firebase/database";
// import { getAuth, onAuthStateChanged } from "firebase/auth";


import axios from 'axios';

// const auth = getAuth();





// const searchButton = document.getElementById("saveB");



// var options = null;

// searchButton.addEventListener('click',function(){

//   var userI = document.getElementById("fname").value;

//   options = {
//   method: 'GET',
//   url: 'https://jsearch.p.rapidapi.com/search',
//   params: {query: userI, page: '10', num_pages: '10',employment_types: 'FULLTIME'},
//   headers: {
//     'X-RapidAPI-Key': '085c20be10msh19564d51aa377d0p1fe714jsn929d074bae6c',
//     'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
//   }  
// };
//   userI = document.getElementById("fname").value = "";
//   addCards(currentPage);
  
  //  options = {
  //   method: 'GET',
  //   url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
  //   headers: {
  //     'X-RapidAPI-Key': 'f26fb09eb3msh3d4336d79d9cef6p1d60b9jsnf70a1205ee86',
  //     'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  //   }
  // };

// })





const search = document.getElementById("search");
const carDiv = document.getElementById("card-container");


let clearbox = (elementID) =>{

  while(elementID.firstChild) {
    elementID.removeChild(elementID.firstChild);
  }

};



var options = null;

let currentPage = null;

search.addEventListener('click', () => {

  if(carDiv.hasChildNodes()){

    clearbox(carDiv);
  }

  var userIn = document.getElementById("userIn").value;

  currentPage = 1;


  options = {
      method: 'GET',
      url: 'https://jsearch.p.rapidapi.com/search',
      params: {query: userIn, page: '10', num_pages: '10',employment_types: 'FULLTIME'},
      headers: {
        'X-RapidAPI-Key': '085c20be10msh19564d51aa377d0p1fe714jsn929d074bae6c',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      }  
    };

  var userIn = document.getElementById("userIn").value = "";



    addCards(currentPage);




})



let writeData = (id,nameSave,link) => {

  const db = getDatabase(app);

  set(ref(db,'savedList/' + id + "/" + nameSave),  {url_ : link,priority : false,type_: "Job"});

};



// const options = {
//     method: 'GET',
//     url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
//     headers: {
//       'X-RapidAPI-Key': 'f26fb09eb3msh3d4336d79d9cef6p1d60b9jsnf70a1205ee86',
//       'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
//     }
// };
  

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

var cardLimit = 100;
const cardIncrease = 9;
const pageCount = Math.ceil(cardLimit / cardIncrease);

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

const createCard = (jobT,jobCN,jobD,jobL) => {

  
  const card = document.createElement("div");
  const saveB = document.createElement("button");
  const jobTitle = document.createElement("button");
  const jobCLocation = document.createElement("div");
  const jobDesc = document.createElement("p");


  card.className = "card";
  jobTitle.className = "jobTitle";
  jobCLocation.className = "jobCLocation";
  jobDesc.className = "jobDescription";
  saveB.className = "saveB";

  saveB.innerHTML = "Save";
  jobTitle.innerHTML = jobT;
  jobCLocation.innerHTML = jobCN;
  jobDesc.innerHTML = jobD;

  card.style.backgroundColor = getRandomColor();
  cardContainer.appendChild(card);

  saveB.addEventListener('click',function(event){

    const auth = getAuth(app);

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        writeData(uid,jobT,jobL);
        console.log("should have worked");

    
        // ...
      } else {
        console.log("Did not work");
        // User is signed out
        // ...
      }
    });


  })

  card.appendChild(saveB);

  jobTitle.addEventListener('click',() => {
    location.href = jobL;
  })

  card.appendChild(jobTitle);
  card.appendChild(jobCLocation);
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

      // createCard(data[i]["title"],data[i]["description"],data[i]["url"]);

      createCard(data[i]["job_title"],data[i]["employer_name"],data[i]["job_description"],data[i]["job_apply_link"]);

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

// window.onload = function () {

//   addCards(currentPage);
// };

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
	
