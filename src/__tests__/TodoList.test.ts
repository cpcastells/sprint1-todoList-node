import TodoList from "../TodoList";

describe("Given a TodoList class", () => {
  let todoList: TodoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  describe("When the TodoList 'add' method is called with a description", () => {
    test("Then it shoud add a task to the list", () => {
      const taskDescription = "Eat pizza";

      const task = todoList.addTask(taskDescription);

      expect(task.description).toBe(taskDescription);
      expect(task.completed).toBe(false);
    });
  });

  describe("When the TodoList 'showTasks' is called", () => {
    test("Then it should show a list of the tasks", () => {
      const task1 = todoList.addTask("Task 1");
      const task2 = todoList.addTask("Task 2");
      const task3 = todoList.addTask("Task 3");

      const allTasks = todoList.showTasks();

      expect(allTasks).toHaveLength(3);
      expect(allTasks).toContain(task1);
      expect(allTasks).toContain(task2);
      expect(allTasks).toContain(task3);
    });
  });
});
