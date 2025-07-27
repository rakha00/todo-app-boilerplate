export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export type FilterStatus = "all" | "active" | "completed";

export interface AppState {
  todos: Todo[];
  filter: FilterStatus;
}
