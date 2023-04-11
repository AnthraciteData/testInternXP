import {app} from "../firebaseInitilization";
import { getDatabase, ref, onValue, set, remove} from "firebase/database";

const db = getDatabase(app);

const priorityPath = ref(db, 'savedList/' + 'eHFk7lApzqgYgXCUNjHm8Ra6EWE2/');

const cardContainer = document.getElementById("card-container");





let updatePriority = (webName,pBool,link,webType) => {

    // console.log(webName);

    const db = getDatabase(app);

        set(ref(db, 'savedList/' + 'eHFk7lApzqgYgXCUNjHm8Ra6EWE2/' + webName), {
            
            url_ : link,
            priority : pBool,
            type_: webType

          });


}

// let getPriority = (nameEvent) => {

//     const pP = ref(db, 'savedList/' + 'eHFk7lApzqgYgXCUNjHm8Ra6EWE2/' + nameEvent);

//     onValue(pP, (snapshot) => {

       
//         const data = snapshot.val();

//         console.log(data["priority"]);

        
//       });

// }

// var getSaves = () => {

//     onValue(priorityPath, (snapshot) => {
//         const data = snapshot.val();
//         console.log(Object.keys(data).length)
//       });



// }

let deleteItem = (webName) =>{

    let dataRemove = ref(db, 'savedList/' + 'eHFk7lApzqgYgXCUNjHm8Ra6EWE2/' + webName);

    remove(dataRemove).then(() => {

        console.log(webName + " was removed from data base");
    });
}

let creatSaveitem = (typeEvent,nameEvent,priority,link,idN) => {


    const saveItem = document.createElement("div");

    const itemInfo = document.createElement("div");

    const itemName = document.createElement("div");

    const itemPriority = document.createElement("button");

    const deleteB = document.createElement("button");


    saveItem.className = "saveItem";

    saveItem.id = nameEvent;

    itemInfo.className = "itemInfo";

    itemName.className = "itemName";

    itemPriority.className = "itemPriority";

    deleteB.className = "delete";

    itemInfo.innerHTML = typeEvent;

    itemName.innerHTML = nameEvent;

    itemPriority.innerHTML = priority;

    if(priority == "P"){

        itemPriority.style.backgroundColor = 'Red';

    }else{

        itemPriority.style.backgroundColor = 'lightblue';
    }

    itemPriority.addEventListener('click', () => {
        // console.log(itemPriority.textContent);

        if(itemPriority.textContent == "NP"){
            //want prio
            updatePriority(itemName.textContent,true,link,typeEvent)

            itemPriority.innerHTML = "P";

            itemPriority.style.backgroundColor = 'Red';


           
        }
        else{
            //do not want prio
            updatePriority(itemName.textContent,false,link,typeEvent)

            itemPriority.innerHTML = "NP";

            itemPriority.style.backgroundColor = 'lightblue';

        }
    })

    deleteB.innerHTML = "remove";

    cardContainer.appendChild(saveItem);

    saveItem.appendChild(itemInfo);
    
    saveItem.appendChild(itemName);

    saveItem.appendChild(itemPriority);

    deleteB.addEventListener('click', () =>{

        deleteItem(nameEvent);
        cardContainer.removeChild(document.getElementById(nameEvent));
        

    })

    saveItem.appendChild(deleteB);

   
    
}

let addItems = () =>{

    onValue(priorityPath, (snapshot) => {

        const data = snapshot.val();

        var dataLength = Object.keys(data).length;

        var webNames = Object.keys(data);
        var webValues = Object.values(data);
    

        for (let i = 0 ; i < dataLength; i++){

            console.log(i)

            if(webValues[i]["priority"]){

                creatSaveitem(webValues[i]["type_"],webNames[i],"P",webValues[i]["url_"])


            }
            else{

                creatSaveitem(webValues[i]["type_"],webNames[i],"NP",webValues[i]["url_"])


            }
            
            
            // creatSaveitem(webValues[i]["type_"],webNames[i])
            // getPriority(webNames[i]);

            
        }
        
      },{ onlyOnce: true });


}


window.onload = function () {


    // for(let i = 0 ; i < 10 ; i++){

    //     console.log("sjnkjsk");

    //     creatSaveitem();

    // }

    // console.log(Object.keys(getSaves).length);
    // console.log(getSaves)

    addItems();
    console.log("kdkjs")
    // getPriority();

  };