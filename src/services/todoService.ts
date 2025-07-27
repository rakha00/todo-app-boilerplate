import { v4 as uuidv4 } from 'uuid';
import type { Todo } from '../types/todo.types';

export function createTodo(todos: readonly Todo[], text: string): Todo[] {
  const newTodo: Todo = {
    id: uuidv4(),
    text,
    completed: false,
    createdAt: new Date(),
  };

  return [...todos, newTodo];
}

export function toggleTodo(todos: readonly Todo[], id: string): Todo[] {
  return todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
}

export function deleteTodo(todos: readonly Todo[], id: string): Todo[] {
  return todos.filter((todo) => todo.id !== id);
}
