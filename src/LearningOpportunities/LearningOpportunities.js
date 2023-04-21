import {app} from "../firebaseInitilization";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import axios from 'axios';

let varCheck = (namedSave) =>{

  const regex = /[^a-zA-Z ]/g

  return namedSave.replace(regex," ")

}
let writeData = (id,nameSave,link) =>{

  const db = getDatabase(app);

  set(ref(db,'savedList/' + id + "/" + varCheck(nameSave) ),  {url_ : link,priority : false,type_: "leanringOpp"});


};

const coursesSearch = document.getElementById("coursesB");
const networkSearch = document.getElementById("networkB");
const work = document.getElementById("workB");
const carDiv = document.getElementById("card-container");

var options = null;

let currentPage = null;

function clearBox(elementID) {
  
    
  while(elementID.firstChild) {
    elementID.removeChild(elementID.firstChild);
  }
}

coursesSearch.addEventListener('click',function(){


  if(carDiv.hasChildNodes()){
    clearBox(carDiv);
  }

  var coursesV = document.getElementById("courses").value;

  currentPage = 1;

  options = {
    method: 'GET',
    url: 'https://duckduckgo8.p.rapidapi.com/',
    params: {q: coursesV + " Courses Opportunities"},
    headers: {
      'X-RapidAPI-Key': '085c20be10msh19564d51aa377d0p1fe714jsn929d074bae6c',
      'X-RapidAPI-Host': 'duckduckgo8.p.rapidapi.com'
    }
};
coursesV = document.getElementById("courses").value = "";
addCards(currentPage);
  
  //  options = {
  //   method: 'GET',
  //   url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
  //   headers: {
  //     'X-RapidAPI-Key': 'f26fb09eb3msh3d4336d79d9cef6p1d60b9jsnf70a1205ee86',
  //     'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
  //   }
  // };

})
networkSearch.addEventListener('click',function(){

  if(carDiv.hasChildNodes()){
    clearBox(carDiv);
  }
    var newtworkV = document.getElementById("network");

    currentPage = 1;

    
    options = {
        method: 'GET',
        url: 'https://duckduckgo8.p.rapidapi.com/',
        params: {q: newtworkV + "Networking Opportunities"},
        headers: {
          'X-RapidAPI-Key': '085c20be10msh19564d51aa377d0p1fe714jsn929d074bae6c',
          'X-RapidAPI-Host': 'duckduckgo8.p.rapidapi.com'
        }
    };

    newtworkV = document.getElementById("network").value = "";
    addCards(currentPage);
})
work.addEventListener('click',function(){

  if(carDiv.hasChildNodes()){
    clearBox(carDiv);
  }

    var workV = document.getElementById("work");

    currentPage = 1;


    options = {
        method: 'GET',
        url: 'https://duckduckgo8.p.rapidapi.com/',
        params: {q: workV + " Workshops Opportunities"},
        headers: {
          'X-RapidAPI-Key': '085c20be10msh19564d51aa377d0p1fe714jsn929d074bae6c',
          'X-RapidAPI-Host': 'duckduckgo8.p.rapidapi.com'
        }
    };

    workV = document.getElementById("work").value = "";

    addCards(currentPage);

})


 let axiosDataPromise = () => {
  // create a promise for the axios request
  const promise = axios.request(options);

  // using .then, create a new promise which extracts the data
  const dataPromise = promise.then((response) => response.data.results)

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

const createCard = (eventName,eventDesc,eventLink) => {

  
  const card = document.createElement("div");

  const saveB = document.createElement("div");

  const itemInfo = document.createElement("div");

  const itemDesc = document.createElement("p");

  card.className = "card";
  itemInfo.className = "itemInfo";
  itemDesc.className = "itemDesc";
  saveB.className = "saveB";

  saveB.innerHTML = "Save";
  itemInfo.innerHTML = eventName;
  itemDesc.innerHTML = eventDesc;


  cardContainer.appendChild(card);

  saveB.addEventListener('click', () =>{

    const auth = getAuth(app);

    onAuthStateChanged(auth,(user) =>{

      if (user) {
        
        const uid = user.uid;
        writeData(uid,eventName,eventLink);
        console.log("should have worked");

    
      } else {
        console.log("Did not work");
       
      }
    })


  })

  card.appendChild(saveB);

  itemInfo.addEventListener('click',() =>{

    location.href = eventLink;


  })
  card.appendChild(itemInfo);
  card.appendChild(itemDesc);
  


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

      // createCard(data[i]["name"],data[i]["country"],data[i]["id"],data[i]["job_apply_link"]);

      createCard(data[i]["title"],data[i]["description"],data[i]["url"]);

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


//   addCards(currentPage);
// };

results.addEventListener("scroll", handleInfiniteScroll);