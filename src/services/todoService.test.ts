import { describe, it, expect } from "vitest";
import { createTodo } from "./todoService";
import type { Todo } from "../types/todo.types";

describe("todoService", () => {
  it("harus bisa membuat todo baru", () => {
    const todos: Todo[] = [];
    const newText = "Belajar Testing";
    const newTodos = createTodo(todos, newText);

    expect(newTodos.length).toBe(1);
    expect(newTodos[0].text).toBe(newText);
    expect(newTodos[0].completed).toBe(false);
  });
});
