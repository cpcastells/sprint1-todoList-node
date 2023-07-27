import { v4 as uuidv4 } from "uuid";
import type Task from "./types";

class TodoList {
  private readonly tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  showTasks = () => this.tasks;

  addTask = (description: string) => {
    const newTask = {
      id: uuidv4(),
      description,
      completed: false,
    };
    this.tasks.push(newTask);
    return newTask;
  };
}

export default TodoList;
