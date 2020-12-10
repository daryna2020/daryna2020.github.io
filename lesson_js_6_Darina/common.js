document.addEventListener("DOMContentLoaded", function () {

    const intField = document.querySelector(".input-field");
    const addBtn = document.querySelector(".button-add");

    const listWrapper = document.querySelector(".list-wrapper");

    let arrayTasks;

    if (localStorage.tasks) {
        arrayTasks = JSON.parse(localStorage.getItem("tasks"));
    } else {
        arrayTasks = [];
    }

    function newTask(taskText) {
        this.taskText = taskText;
        this.status = false;
    }

    const refreshLocalStorage = () => {
        localStorage.setItem("tasks", JSON.stringify(arrayTasks))
    }


    const addNewTask = () => {
        if (intField.value.trim()) {
            arrayTasks.push(new newTask(intField.value));
            refreshLocalStorage();
            showTaskList();
            intField.value == null;
        } else {
            alert("fill the task field")
        }
    }

    const createRow = (elem, index) => {
        return ` 
    <div class="task-row ${elem.status ? "task-row--checked " : ""}">
    <span class="task-number">${index + 1}</span>
        <h3 class="task-title">${elem.taskText}</h3>
        <input class="task-status" type="checkbox" ${elem.status ? "checked" : ""} data-index="${index}">
        <button class="button button-delete btn" data-index="${index}"><i class="fa fa-trash"></i>delete</button>
    </div>
    `;
    };


    const showTaskList = () => {
        listWrapper.innerHTML = "";
        arrayTasks.forEach((elem, index) => {
            listWrapper.innerHTML += createRow(elem, index);
        });

        const tasksCheckbox = document.querySelectorAll(".task-status");
        const deleteBtn = document.querySelectorAll(".button-delete");

        tasksCheckbox.forEach(elem => {
            elem.addEventListener("change", checkTask);
        });

        deleteBtn.forEach(elem => {
            elem.addEventListener("click", deleteTask);
        })
    };

    function checkTask() {
        arrayTasks[this.dataset.index].status = !arrayTasks[this.dataset.index].status;
        refreshLocalStorage();
        showTaskList();
    }

    function deleteTask() {
        arrayTasks.splice(this.dataset.index, 1);
        refreshLocalStorage();
        showTaskList();
    }

    showTaskList();

    addBtn.addEventListener("click", addNewTask);


    document.addEventListener("keyup", function (evt) {
        if (evt.code == "Enter" || evt.key == "Enter") {
            addNewTask();
        }
    });
});