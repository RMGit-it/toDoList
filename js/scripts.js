// Business Logic for ToDoList
let  honeyDo = new ToDoList();

function ToDoList() {
  this.tasks = [];
  this.currentId = 0;
}
ToDoList.prototype.addTask = function(task) {
  this.tasks.push(task);
}
ToDoList.prototype.assignId = function() {
  this.currentId+= 1;
  return this.currentId;
}
ToDoList.prototype.removeTask = function(id) {
  for (let i=0; i<this.tasks.length; i++){
    if (this.tasks[i]) {
      if (this.tasks[i].id == id) {
        delete this.tasks[i];
        return true;
      }
    }
  };
  return false;
}

//Business Logic for Tasks
function Task(chore, deadline, location) {
  this.chore = chore;
  this.deadline = deadline;
  this.location = location;
}