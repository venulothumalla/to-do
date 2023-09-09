// Get elements from the DOM
var taskInput = document.getElementById("taskInput");
var addTaskButton = document.getElementById("addTask");
var taskList = document.getElementById("taskList");

// Add task when the "Add" button is clicked
addTaskButton.addEventListener("click", function () {
    var taskText = taskInput.value.trim();
    if (taskText !== "") {
        createTaskElement(taskText);
        taskInput.value = "";
    }
});

// Add task when Enter key is pressed
taskInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        var taskText = taskInput.value.trim();
        if (taskText !== "") {
            createTaskElement(taskText);
            taskInput.value = "";
        }
    }
});

// Create a new task element
function createTaskElement(taskText) {
    var li = document.createElement("li");
    var taskTextElement = document.createTextNode(taskText);
    li.appendChild(taskTextElement);

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    li.appendChild(deleteButton);
    taskList.appendChild(li);
}
