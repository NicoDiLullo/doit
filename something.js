// Select elements
const todoList = document.querySelector('.todo-list');
const addSubtodoBtns = document.querySelectorAll('.add-subtodo-btn');
const removeSubtodoBtns = document.querySelectorAll('.remove-subtodo-btn');

// Add new todo item
function addTodoItem(parent) {
  const li = document.createElement('li');
  const div = document.createElement('div');
  const checkbox = document.createElement('input');
  const input = document.createElement('input');
  const addSubtodoBtn = document.createElement('span');
  const removeSubtodoBtn = document.createElement('span');
  const subtodoList = document.createElement('ul');

  li.appendChild(div);
  div.appendChild(checkbox);
  div.appendChild(input);
  div.appendChild(addSubtodoBtn);
  div.appendChild(removeSubtodoBtn);
  li.appendChild(subtodoList);

  li.classList.add('todo-item');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.classList.add('todo-checkbox');
  input.setAttribute('type', 'text');
  input.classList.add('todo-input');
  input.setAttribute('placeholder', 'Add todo');
  addSubtodoBtn.classList.add('add-subtodo-btn');
  addSubtodoBtn.textContent = '+';
  removeSubtodoBtn.classList.add('remove-subtodo-btn');
  removeSubtodoBtn.textContent = '-';

  parent.appendChild(li);

  // Add event listeners to sub-todo buttons
  addSubtodoBtn.addEventListener('click', () => {
    addTodoItem(subtodoList);
  });

  removeSubtodoBtn.addEventListener('click', () => {
    li.remove();
  });
}

// Add event listener to add-todo button
addSubtodoBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const subtodoList = btn.parentNode.parentNode.querySelector('.subtodo-list');
    addTodoItem(subtodoList);
  });
});

// Add event listener to remove-todo button
removeSubtodoBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const li = btn.parentNode.parentNode;
    li.remove();
  });
});




