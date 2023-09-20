
//add btn
let submitBtn = document.getElementById("submitBtn");
//task list ul
let allTasks = document.getElementById("all-tasks");
// let buttons = document.getElementById("button-con")
let text = document.getElementById("text");

let filed = document.getElementById("filed");

let editBtn;

//btn styles
function styleBtn(btn){
    btn.style.display = "flex";
    btn.style.backgroundColor = "yellow"
    btn.style.border = "none";
};


let counter = 0;
function addTask(){
    let li = document.createElement("li");
    let buttons = document.createElement("div")
    buttons.classList = "buttons"
    li.classList = "task-style"
    li.id = 'taks ' + counter++;
    let deleteBtn = document.createElement("button");

    let completeTask = document.createElement("button");
    completeTask.textContent = "complete?";
    styleBtn(completeTask);

    deleteBtn.textContent = "delete"
    styleBtn(deleteBtn);
    let editBtn = document.createElement("button");
    editBtn.textContent = "edit"
    styleBtn(editBtn);
    let doneBtn = document.createElement("button");
    doneBtn.textContent = "done"
    doneBtn.classList = "done"
    styleBtn(doneBtn);
    doneBtn.style.display = "none"
    let filedInput = document.getElementById("filed").value;
    let taskName = document.createTextNode(filedInput);
    filedInput.classList = "text-style"
    // enter option
    li.appendChild(taskName);
    allTasks.appendChild(buttons);
    if(filedInput === ''){
        // return function if we dont have value
        alert("write task name")
        return
        
    }else{
        document.getElementById("all-tasks").appendChild(li)
        buttons.appendChild(editBtn);
        buttons.appendChild(deleteBtn);
        buttons.appendChild(doneBtn);
        buttons.appendChild(completeTask);
    }


    //empty input after click
    document.getElementById("filed").value = "";
    deleteBtn.addEventListener("click", function(){
        li.parentNode.removeChild(li);
        buttons.style.display = "none";
    })
    editBtn.addEventListener("click", doneBtnFunction)

    function doneBtnFunction(){
        li.contentEditable = "true";
        if (doneBtn.style.display === "none") {
            doneBtn.style.display = "block";
            li.style.backgroundColor = "red";
            li.style.textDecoration = "none";
            li.style.color = "black"
            completeTask.style.display = "flex";
          } else {
            doneBtn.style.display = "none";
            li.style.backgroundColor = "#71c7ec";
            li.contentEditable = "false";
          }
        doneBtn.addEventListener("click", function(){
            doneBtn.style.display = "none";
            li.style.backgroundColor = "#71c7ec";
            li.contentEditable = "false";

        })

        li.addEventListener("keypress", function(e){
            if(e.key === "Enter"){
                doneBtn.style.display = "none";
                li.style.backgroundColor = "#71c7ec";
                li.contentEditable = "false";
                console.log("enter")
            }
        })

    };

    completeTask.addEventListener("click", function(){
        li.style.textDecoration = "line-through";
        completeTask.style.display = "none";
        li.style.color = "#439d96";
        li.style.backgroundColor = "#fdf0e4";
        }
    
    )


    

}

filed.addEventListener("keypress", function(e){
    if(e.key === "Enter" && filed.value != ""){
        e.preventDefault();
        submitBtn.click();
        console.log("click")
    }else if(e.key === "Enter" && filed.value === ""){
        alert("Write task name!")
        return
    }
});
