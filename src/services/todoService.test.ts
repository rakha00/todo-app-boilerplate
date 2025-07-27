import { describe, it, expect } from 'vitest';
import { createTodo, toggleTodo, deleteTodo } from './todoService';
import type { Todo } from '../types/todo.types';

describe('todoService', () => {
  it('harus bisa membuat todo baru', () => {
    const todos: Todo[] = [];
    const newText = 'Belajar Testing';
    const newTodos = createTodo(todos, newText);

    expect(newTodos.length).toBe(1);
    expect(newTodos[0].text).toBe(newText);
    expect(newTodos[0].completed).toBe(false);
  });

  it('harus bisa mengubah status completed sebuah todo', () => {
    const initialTodos: Todo[] = [
      { id: '1', text: 'Belajar TS', completed: false, createdAt: new Date() },
    ];
    const updatedTodos = toggleTodo(initialTodos, '1');

    expect(updatedTodos[0].completed).toBe(true);

    const finalTodos = toggleTodo(updatedTodos, '1');
    expect(finalTodos[0].completed).toBe(false);
  });

  it('harus bisa menghapus todo', () => {
    const initialTodos: Todo[] = [
      { id: '1', text: 'Belajar TS', completed: false, createdAt: new Date() },
    ];
    const remainingTodos = deleteTodo(initialTodos, '1');

    expect(remainingTodos.length).toBe(0);
  });
});
