import type { Todo } from "../types/todo.types";
import { randomUUID } from "node:crypto";

export function createTodo(todos: readonly Todo[], text: string): Todo[] {
  const newTodo: Todo = {
    id: randomUUID(),
    text,
    completed: false,
    createdAt: new Date(),
  };

  return [...todos, newTodo];
}
