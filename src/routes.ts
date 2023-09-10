import { Router, type Request, type Response } from "express";
import { title } from "process";
import {
  listAllTasks,
  getATask,
  createTask,
  updateTask,
  deleteTask,
} from "./controllers/taskController";
import { randomUUID } from "crypto";

const routes: Router = Router();

routes.get("/", (req: Request, res: Response) => {
  res.sendStatus(301);
});

// CRUD Taks

routes.get("/tasks", async (req: Request, res: Response) => {
  const list = await listAllTasks();
  res.send(list);
});

routes.get("/tasks/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await getATask(id);
  res.send(task);
});

routes.post("/tasks", async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const id = randomUUID();
  const done = false;

  const task = await createTask({
    id,
    title,
    description,
    done,
  });
  res.send(task);
});

routes.put("/tasks/:id", async (req: Request, res: Response) => {
  const { id } = req.params
  const { title, description, done } = req.body;
  const task = await updateTask({
    id,
    title,
    description,
    done,
  });
  res.send(task);
});

routes.delete("/tasks/:id", async (req: Request, res: Response) => {
  const { id } = req.params
  await deleteTask(id)
  res.sendStatus(204)
});

export default routes;
