let allTask = document.getElementById("allTask");
let doneTask = document.getElementById("doneTask");
let makeTask = document.getElementById("makeTask");
let addBtn = document.getElementById("addBtn");
let taskShow = document.getElementById("taskShow");

let deleteBtn = document.querySelectorAll("deleteBtn")


let taskList = [];

function CreateTask() {
    let taskName = makeTask.value;
    let task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `  
        <form action="">
            <input type="checkbox">                                           
        </form>
        <p>${taskName}</p>    
        <button class="deleteBtn" id="delete"><i class="fa-solid fa-trash"></i></button>  
    `;
    taskList.push(taskShow.appendChild(task));
    console.log(taskList);

    // deleteBtn.addEventListener("click", () => {
    //     taskList.slice(0)
    //     console.log(taskIndex);
        
    //   })

}

