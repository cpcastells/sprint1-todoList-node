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
});
