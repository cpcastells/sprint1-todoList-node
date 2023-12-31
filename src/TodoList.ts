import { v4 as uuidv4 } from "uuid";
import type Task from "./types.js";

class TodoList {
  private tasks: Task[];

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

  removeTask = (id: string) => {
    const initialLength = this.tasks.length;
    this.tasks = this.tasks.filter((task) => task.id !== id);
    return this.tasks.length !== initialLength;
  };

  completeTask = (id: string) => {
    const selectedTask = this.tasks.find((task) => task.id === id);
    if (selectedTask) {
      selectedTask.completed = true;
      return true;
    }

    return false;
  };
}

export default TodoList;
