
//add btn
let submitBtn = document.getElementById("submitBtn");
//task list ul
let allTasks = document.getElementById("all-tasks");
submitBtn.addEventListener("click", function(){
    let li = document.createElement("li");
    let filedInput = document.getElementById("filed").value;
    let taskName = document.createTextNode(filedInput);
    li.appendChild(taskName);
    if(filedInput === ''){
        // return function if we dont have value
        return
    }else{
        document.getElementById("all-tasks").appendChild(li)
    }
    //empty input after click
    document.getElementById("filed").value = "";
})



