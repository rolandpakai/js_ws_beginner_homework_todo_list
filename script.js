window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const tasks = document.querySelector("#tasks");

    form.addEventListener('submit', (e) => addTask(e));

    function addTask(e) {
        e.preventDefault();

        if (input.value == "") {
            return;
        }

        const task = document.createElement("div");
        task.classList.add("task");

        const content = document.createElement("div");
        content.classList.add("content");

        task.appendChild(content);

        inputEl = document.createElement("input");
        inputEl.classList.add("text");
        inputEl.type = "text";
        inputEl.value = input.value;
        inputEl.setAttribute("readonly", "true");

        content.appendChild(inputEl);

        const actions = document.createElement("div");
        actions.classList.add("actions");

        const editB = document.createElement("button");
        editB.classList.add("edit");
        editB.innerText = "Edit";
        editB.addEventListener('click', e => editTask(e));

        const deleteB = document.createElement("button");
        deleteB.classList.add("delete");
        deleteB.innerText = "Delete";
        deleteB.addEventListener('click', e => deleteTask(e));

        actions.appendChild(editB);
        actions.appendChild(deleteB);

        task.appendChild(actions);
        tasks.appendChild(task);

        input.value = "";
    };

    function editTask(e) {
        const actions = e.target.parentElement;
        const task = actions.parentElement;
        const content = task.childNodes[0];
        const inputEl = content.childNodes[0];

        inputEl.removeAttribute("readonly");
        inputEl.focus();

        task.removeChild(actions);

        const newActions = document.createElement("div");
        newActions.classList.add("actions");

        const saveB = document.createElement("button");
        saveB.classList.add("edit");
        saveB.innerText = "Save";
        saveB.addEventListener('click', e => saveTask(e));

        const deleteB = document.createElement("button");
        deleteB.classList.add("delete");
        deleteB.innerText = "Delete";
        deleteB.addEventListener('click', e => deleteTask(e));

        newActions.appendChild(saveB);
        newActions.appendChild(deleteB);

        task.appendChild(newActions);
    }

    function deleteTask(e) {
        tasks.removeChild(e.target.parentElement.parentElement);
    }

    function saveTask(e) {
        const actions = e.target.parentElement;
        const task = actions.parentElement;
        const content = task.childNodes[0];
        const inputEl = content.childNodes[0];
        inputEl.setAttribute("readonly", "true");

        task.removeChild(actions);

        const newActions = document.createElement("div");
        newActions.classList.add("actions");

        const editB = document.createElement("button");
        editB.classList.add("edit");
        editB.innerText = "Edit";
        editB.addEventListener('click', e => editTask(e));

        const deleteB = document.createElement("button");
        deleteB.classList.add("delete");
        deleteB.innerText = "Delete";
        deleteB.addEventListener('click', e => deleteTask(e));

        newActions.appendChild(editB);
        newActions.appendChild(deleteB);

        task.appendChild(newActions);
    }
});