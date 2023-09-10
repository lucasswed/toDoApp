import { Router, type Request, type Response } from "express";
import { title } from "process";
import taskController from "./controllers/taskController";
import { randomUUID } from "crypto";

const routes: Router = Router();

routes.get("/", (req: Request, res: Response) => {
  res.sendStatus(301)
});

// CRUD Taks

routes.get("/tasks", async (req: Request, res: Response) => {
  const controller = new taskController();
  const list = await controller.listAllTasks()
  res.send(list)
});

routes.get("/tasks/:id", async (req: Request, res: Response) => {
  const { id } = req.params
  const controller = new taskController();
  const task = await controller.getATask(id);
  res.send(task);
});

routes.post("/tasks", async (req: Request, res: Response) => {
  const { title, description } = req.body
  const id = randomUUID();
  const done = false
  const controller = new taskController();

  const task = await controller.createTask({
    id,
    title,
    description,
    done
  });
  res.send(task);
});

routes.put("/tasks/:id", (req: Request, res: Response) => {
  res.send(`Update the task with id ${req.params?.id} with the informations ${JSON.stringify(req.body)}`);
});

routes.delete("/tasks/:id", (req: Request, res: Response) => {
  res.send(`Delete the task with id ${req.params?.id}`);
});

export default routes;
