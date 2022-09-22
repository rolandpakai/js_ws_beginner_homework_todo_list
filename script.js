window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const tasks = document.querySelector("#tasks");
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const task = input.value;

        if (!task) {
            alert('No input was given.');
            return;
        }
    
        const task_element = document.createElement('div');
        task_element.classList.add('task');
    
        const task_content_element = document.createElement('div');
        task_content_element.classList.add('content');
        task_element.appendChild(task_content_element);
    
        const text_input_element = document.createElement('input');
        text_input_element.classList.add('text');
        text_input_element.type = 'text';
        text_input_element.value = task;
        text_input_element.setAttribute('readonly', 'readonly');
        task_content_element.appendChild(text_input_element);
    
        const actions_element = document.createElement('div');
        actions_element.classList.add('actions');
    
        const edit_btn = document.createElement('button');
        edit_btn.classList.add('edit');
        edit_btn.innerText = 'Edit';
    
        const delete_btn = document.createElement('button');
        delete_btn.classList.add('delete');
        delete_btn.innerText = 'Delete';
       
        actions_element.appendChild(edit_btn);
        actions_element.appendChild(delete_btn);
        task_element.appendChild(actions_element);
        tasks.appendChild(task_element);
    
        input.value = '';
    
        edit_btn.addEventListener('click', (e) => {
            if (edit_btn.innerText.toLowerCase() == "edit") {
                text_input_element.removeAttribute("readonly");
                text_input_element.focus();
                edit_btn.innerText = "Save";
            } else {
                edit_btn.innerText = "Edit";
                text_input_element.setAttribute("readonly", "readonly");
            }
        });
    
        delete_btn.addEventListener('click', (e) => {
            tasks.removeChild(task_element);
        });
    });
});