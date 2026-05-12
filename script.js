const taskInput = document.getElementById("taskInput");

const addBtn = document.getElementById("addBtn");

const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value;

  if (taskText.trim() === "") {
    alert("Please enter a task");

    return;
  }

  const li = document.createElement("li");

  const span = document.createElement("span");

  span.innerText = taskText;

  span.classList.add("task-text");

  const buttonGroup = document.createElement("div");

  buttonGroup.classList.add("button-group");

  const completeBtn = document.createElement("button");

  completeBtn.innerText = "Complete";

  completeBtn.classList.add("complete-btn");

  completeBtn.addEventListener("click", function () {
    span.classList.toggle("completed");
  });

  const updateBtn = document.createElement("button");

  updateBtn.innerText = "Update";

  updateBtn.classList.add("update-btn");

  updateBtn.addEventListener("click", function () {
    const updatedTask = prompt("Update your task:", span.innerText);

    if (updatedTask === null) {
      return;
    }

    if (updatedTask.trim() === "") {
      alert("Task cannot be empty");

      return;
    }

    span.innerText = updatedTask;
  });

  const deleteBtn = document.createElement("button");

  deleteBtn.innerText = "Delete";

  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  buttonGroup.appendChild(completeBtn);

  buttonGroup.appendChild(updateBtn);

  buttonGroup.appendChild(deleteBtn);

  li.appendChild(span);

  li.appendChild(buttonGroup);

  taskList.appendChild(li);

  taskInput.value = "";
}
