import { expect, test } from "vitest";
import { Task } from "./Task";

test('Create a task', () => {
  const task = new Task({
    title: 'teste',
    description: 'descricao',
    done: false
  })

  expect(task).toBeInstanceOf(Task);
  expect(task.title).toEqual('teste');
  expect(task.description).toEqual('descricao');
  expect(task.done).toBeFalsy();
})