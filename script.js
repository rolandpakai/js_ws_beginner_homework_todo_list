const form = document.querySelector('#new-task-form');
const input = document.querySelector('#new-task-input');
const tasks = document.querySelector('#tasks');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = input.value;

    if(!task) {
        alert('Please input a task!');
        return;
    }

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');

    taskDiv.appendChild(contentDiv);

    const inputEl = document.createElement('input');
    inputEl.classList.add('text');
    inputEl.type = 'text';
    inputEl.value = task;
    inputEl.setAttribute('readonly','readonly');

    contentDiv.appendChild(inputEl);

    const actionsDiv = document.createElement('div');
    actionsDiv.classList.add('actions');

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.innerText = 'Edit';

    const delBtn = document.createElement('button');
    delBtn.classList.add('delete');
    delBtn.innerText = 'Delete';

    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(delBtn);

    taskDiv.appendChild(actionsDiv);

    tasks.appendChild(taskDiv);

    input.value = '';
    editBtn.addEventListener('click', () => {
        if(editBtn.innerText.toLowerCase() == 'edit') {
            inputEl.removeAttribute('readonly');
            inputEl.focus();
            editBtn.innerText = 'Save';
        } else {
            inputEl.setAttribute('readonly','readonly');
            editBtn.innerText = 'Edit';
        }
    });

    delBtn.addEventListener('click', () => {
        tasks.removeChild(taskDiv);
    })
});