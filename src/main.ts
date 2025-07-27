import type { AppState } from './types/todo.types';
import { createTodo, deleteTodo, toggleTodo } from './services/todoService';

const form = document.querySelector('#todo-form') as HTMLFormElement;
const input = document.querySelector('#todo-input') as HTMLInputElement;
const todoListEl = document.querySelector('#todo-list') as HTMLUListElement;

let state: AppState = {
  todos: [],
  filter: 'all',
};

function render() {
  todoListEl.innerHTML = '';

  state.todos.forEach((todo) => {
    const todoItem = document.createElement('li');
    if (todo.completed) {
      todoItem.classList.add('completed');
    }

    todoItem.dataset.id = todo.id;

    todoItem.innerHTML = `
		<input type="checkbox" class="toogle-btn" ${todo.completed ? 'checked' : ''}>
		<span>${todo.text}</span>
		<button class="delete-btn">Hapus</button>
	`;
    todoListEl.append(todoItem);
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTodoText = input.value.trim();

  if (newTodoText) {
    const newTodos = createTodo(state.todos, newTodoText);

    state = {
      ...state,
      todos: newTodos,
    };

    render();
    input.value = '';
  }
});

todoListEl.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const parentLi = target.closest('li');
  if (!parentLi) return;

  const todoId = parentLi.dataset.id;
  if (!todoId) return;

  if (target.matches('.toogle-btn')) {
    const newTodos = toggleTodo(state.todos, todoId);
    state = { ...state, todos: newTodos };
  }

  if (target.matches('.delete-btn')) {
    const newTodos = deleteTodo(state.todos, todoId);
    state = { ...state, todos: newTodos };
  }

  render();
});

render();
