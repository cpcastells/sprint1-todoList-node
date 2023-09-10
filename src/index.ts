import TodoList from "./TodoList.js";

const todoList = new TodoList();

const addTask = (): void => {
  process.stdout.write("\nEnter task description: ");
  process.stdin.once("data", (data) => {
    const description = data.toString().trim();
    if (description !== "") {
      todoList.addTask(description);
    }

    displayMenu();
  });
};

const markTaskAsCompleted = (): void => {
  listTasks();
  process.stdout.write("\nEnter the task ID to mark as completed: ");
  process.stdin.once("data", (data) => {
    const taskId = data.toString().trim();
    todoList.completeTask(taskId);
    displayMenu();
  });
};

const removeTask = (): void => {
  listTasks();
  process.stdout.write("\nEnter the task ID to remove: ");
  process.stdin.once("data", (data) => {
    const taskId = data.toString().trim();
    todoList.removeTask(taskId);
    displayMenu();
  });
};

const listTasks = (): void => {
  const tasks = todoList.showTasks();
  tasks.forEach((task) => {
    const status = task.completed ? "[x]" : "[ ]";
    console.log(`${status} ${task.id}: ${task.description}`);
  });
  displayMenu();
};

const commands = {
  add: { description: "       Add a new task", handler: addTask },
  complete: {
    description: "  Mark a task as completed",
    handler: markTaskAsCompleted,
  },
  remove: { description: "    Remove a task", handler: removeTask },
  list: { description: "      List all tasks", handler: listTasks },
  exit: { description: "      Exit", handler: () => process.exit(0) },
};

function displayMenu() {
  console.log("\nCommand list:\n");
  Object.entries(commands).forEach(([command, { description }]) => {
    console.log(`${command}: ${description}`);
  });

  process.stdout.write("\nChoose an action:\n");
  process.stdin.once("data", (data) => {
    const choice = data.toString().trim();
    const command = commands[choice as keyof typeof commands] as {
      handler: () => void;
    };
    if (command) {
      command.handler();
    } else {
      console.log("Invalid command. Please try again.");
      displayMenu();
    }
  });
}

console.log("ToDo List CLI\n");
displayMenu();
