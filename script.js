document.querySelector("#new-task-form").addEventListener('submit', (e) => {
	e.preventDefault();

	const input = document.querySelector("#new-task-input");
	const value = input.value;
	input.value = '';

	const taskTempplate = `<div class="task">
		<div class="content">
			<input 
				type="text" 
				class="text" 
				value="${value}"
				readonly>
		</div>
		<div class="actions">
			<button class="edit">Edit</button>
			<button class="delete">Delete</button>
		</div>
		</div>`;

	const task_el = document.createElement('div');
	task_el.classList.add('task-container');
	task_el.innerHTML = taskTempplate;
	const list_el = document.querySelector("#tasks");
	list_el.appendChild(task_el);

	task_el.querySelector(".edit").addEventListener('click', (e) => {
		const targetElement = e.target;
		const taskInputElement = targetElement.closest('.task').querySelector('input.text');

		if (targetElement.innerText.toLowerCase() == "edit") {
			targetElement.innerText = "Save";
			taskInputElement.removeAttribute("readonly");
			taskInputElement.focus();
		} else {
			targetElement.innerText = "Edit";
			taskInputElement.setAttribute("readonly", "readonly");
		}
	});

	task_el.querySelector(".delete").addEventListener('click', (e) => {
		list_el.removeChild(e.target.closest('.task').parentElement);
	});
});