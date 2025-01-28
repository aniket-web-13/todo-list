let allTask = document.getElementById("allTask");
let doneTask = document.getElementById("doneTask");
let makeTask = document.getElementById("makeTask");
let addBtn = document.getElementById("addBtn");
let taskShow = document.getElementById("taskShow");

console.log(makeTask);

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
  
  `
  taskShow.appendChild(task);
 


}
