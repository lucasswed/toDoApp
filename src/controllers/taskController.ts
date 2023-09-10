import { Taskprops } from "./../entities/Task";
import { prisma } from "./../prisma";

export async function createTask(taskprops: Taskprops) {
  const { id, title, description, done } = taskprops;
  const task = await prisma.task.create({
    data: {
      id,
      title,
      description,
      done,
    },
  });
  return task;
}

export async function listAllTasks() {
  const list = await prisma.task.findMany();
  return list;
}

export async function getATask(id: string) {
  const list = await prisma.task.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return list;
}

export async function updateTask(taskprops: Taskprops) {
  const { id, title, description, done } = taskprops;
  const task = await prisma.task.update({
    where: {
      id
    },
    data: {
      title,
      description,
      done
    }
  });
  return task
}

export async function deleteTask(id: string) {
  await prisma.task.delete({
    where: {
      id
    }
  })
}
