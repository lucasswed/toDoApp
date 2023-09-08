import { expect, it, describe } from "vitest";
import { Task } from "./Task";

describe("Task", () => {
  it("should create a task with description", () => {
    const task = new Task({
      title: "teste",
      description: "descricao",
      done: false,
    });

    expect(task).toBeInstanceOf(Task);
    expect(task.title).toEqual("teste");
  });
  it("should create a task without description", () => {
    const task = new Task({
      title: "teste",
      done: false,
    });

    expect(task).toBeInstanceOf(Task);
    expect(task.description).toBeUndefined();
  });
});
