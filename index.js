let allTask = document.getElementById("allTask");
let doneTask = document.getElementById("doneTask");
let makeTask = document.getElementById("makeTask");
let addBtn = document.getElementById("addBtn");
let taskShow = document.getElementById("taskShow");




let taskList = [];

// function CreateTask() {
//     let taskName = makeTask.value;
//     let task = document.createElement("div");
//     task.classList.add("task");
//     task.innerHTML = `  
//         <form action="">
//             <input type="checkbox">                                           
//         </form>
//         <p>${taskName}</p>    
//         <button class="deleteBtn" id="delete"><i class="fa-solid fa-trash"></i></button>  
//     `;
//     taskList.push(taskShow.appendChild(task));
//     console.log(taskList);

//     deleteBtn.addEventListener("click", () => {
//         taskList.slice(0)
//         console.log(taskIndex);

//       })

// }

function CreateTask() {
    let taskName = makeTask.value;
    if (!taskName) return;

    let task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `
        <form action="">
            <input type="checkbox" class="checkbox">                                           
        </form>
        <p>${taskName}</p>    
        <button class="deleteBtn"><i class="fa-solid fa-trash"></i></button>  
    `;

    taskShow.appendChild(task);
    taskList.push(task);

    makeTask.value = "";

    let deleteBtn = task.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", () => {
        task.remove();
        taskList = taskList.filter(t => t !== task);
    });

    let checkbox = task.querySelector(".checkbox");
    checkbox.addEventListener("change", () => {
        task.classList.toggle("done", checkbox.checked);
    });

    console.log(taskList);
    
}

addBtn.addEventListener("click", CreateTask);


makeTask.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        CreateTask();
    }
});
