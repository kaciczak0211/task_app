
//add btn
let submitBtn = document.getElementById("submitBtn");
//task list ul
let allTasks = document.getElementById("all-tasks");

let counter = 0;
function addTask(){
    let li = document.createElement("li");
    li.classList = "task-style"
    li.id = 'taks ' + counter++;
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete"
    deleteBtn.classList = "delete"
    deleteBtn.style.display = "flex"
    deleteBtn.style.gap = "2rem";
    let editBtn = document.createElement("button");
    editBtn.textContent = "edit"
    editBtn.classList = "edit"
    editBtn.style.display = "flex"
    editBtn.style.gap = "2rem";
    let filedInput = document.getElementById("filed").value;
    let taskName = document.createTextNode(filedInput);
    li.appendChild(taskName);
    if(filedInput === ''){
        // return function if we dont have value
        return
    }else{
        document.getElementById("all-tasks").appendChild(li)
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        // li.appendChild(editBtn);
    }

    //empty input after click
    document.getElementById("filed").value = "";
    deleteBtn.addEventListener("click", function(){
        li.parentNode.removeChild(li);
    })
    editBtn.addEventListener("click", function(){
        allTasks.contentEditable = "true";
        li.style.backgroundColor = "black";
        let doneBtn = document.createElement("button");
        doneBtn.textContent = "done"
        doneBtn.classList = "done"
        doneBtn.style.display = "flex"
        doneBtn.style.gap = "2rem";
        li.appendChild(doneBtn);
        doneBtn.addEventListener("click", function(){
            doneBtn.remove();
            li.style.backgroundColor = "#71c7ec";
        })
    })


}







