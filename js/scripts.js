// Business Logic for ToDoList
let  honeyDo = new ToDoList();

function ToDoList() {
  this.tasks = [];
}
ToDoList.prototype.addTask = function(task) {
  this.tasks.push(task);
}

//Business Logic for Tasks
function Task(chore, deadline, location) {
  this.chore = chore;
  this.deadline = deadline;
  this.location = location;
}