const taskInput = document.getElementById("taskInput");

const addBtn = document.getElementById("addBtn");

const taskList = document.getElementById("taskList");

let tasks = [];

loadTasks();

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value;

  if (taskText.trim() === "") {
    alert("Please enter a task");

    return;
  }

  const taskObject = {
    text: taskText,

    completed: false,
  };

  tasks.push(taskObject);

  saveTasks();

  displayTasks();

  taskInput.value = "";
}

function displayTasks() {
  taskList.innerHTML = "";

  tasks.forEach(function (task, index) {
    const li = document.createElement("li");

    const span = document.createElement("span");

    span.innerText = task.text;

    span.classList.add("task-text");

    if (task.completed === true) {
      span.classList.add("completed");
    }

    const buttonGroup = document.createElement("div");

    buttonGroup.classList.add("button-group");

    const completeBtn = document.createElement("button");

    completeBtn.innerText = "Complete";

    completeBtn.classList.add("complete-btn");

    completeBtn.addEventListener("click", function () {
      tasks[index].completed = !tasks[index].completed;

      saveTasks();

      displayTasks();
    });

    const updateBtn = document.createElement("button");

    updateBtn.innerText = "Update";

    updateBtn.classList.add("update-btn");

    updateBtn.addEventListener("click", function () {
      const updatedTask = prompt("Update your task:", task.text);

      if (updatedTask === null) {
        return;
      }

      if (updatedTask.trim() === "") {
        alert("Task cannot be empty");

        return;
      }

      tasks[index].text = updatedTask;

      saveTasks();

      displayTasks();
    });

    const deleteBtn = document.createElement("button");

    deleteBtn.innerText = "Delete";

    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function () {
      tasks.splice(index, 1);

      saveTasks();

      displayTasks();
    });

    buttonGroup.appendChild(completeBtn);

    buttonGroup.appendChild(updateBtn);

    buttonGroup.appendChild(deleteBtn);

    li.appendChild(span);

    li.appendChild(buttonGroup);

    taskList.appendChild(li);
  });
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const storedTasks = localStorage.getItem("tasks");

  if (storedTasks !== null) {
    tasks = JSON.parse(storedTasks);
  }

  displayTasks();
}
