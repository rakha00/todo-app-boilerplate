import type { Todo } from '../types/todo.types';

export function createTodo(todos: readonly Todo[], text: string): Todo[] {
  const newTodo: Todo = {
    id: crypto.randomUUID(),
    text,
    completed: false,
    createdAt: new Date(),
  };

  return [...todos, newTodo];
}
