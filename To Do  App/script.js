const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");


function addTask(){
    if(inputBox.value === ''){
        alert("You must write someting!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    let saveDate = 
    localStorage.setItem("data", listContainer.innerHTML);
};

function checkDateAndClearStorage() {
    const currentDate = new Date().toDateString();
    const savedDate = localStorage.getItem("date");

    if (currentDate !== savedDate) {
        localStorage.clear();
        localStorage.setItem("date", currentDate);
    }
}

function showTask(){
    checkDateAndClearStorage();
    listContainer.innerHTML= localStorage.getItem("data");
}

showTask();
