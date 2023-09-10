import { Taskprops } from "./../entities/Task";
import { prisma } from "./../prisma";
export default class taskController {
  async createTask(taskprops: Taskprops) {
    const { id, title, description, done } = taskprops;
    const task = await prisma.task.create({
      data: {
        id,
        title,
        description,
        done,
      },
    })
    return (task)
  }

  async listAllTasks() {
    const list = await prisma.task.findMany();
    return list
  }

  async getATask(id: string) {
    const list = await prisma.task.findMany({
      where: {
        id
      }
    });
    return list
  }
}
