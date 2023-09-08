import { Router, type Request, type Response } from "express";

const routes: Router = Router();

routes.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

// CRUD Taks

routes.get("/tasks", (req: Request, res: Response) => {
  console.log("Return all tasks");
});

routes.get("/tasks/:id", (req: Request, res: Response) => {
  console.log(`Return the task with id ${req.body?.id}`);
});

routes.post("/tasks", (req: Request, res: Response) => {
  console.log("Create a new task");
});

routes.put("/tasks/:id", (req: Request, res: Response) => {
  console.log(`Update the task with id ${req.body?.id}`);
  console.log(`With the informations ${JSON.stringify(req.body)}`);
});

routes.delete("/tasks/:id", (req: Request, res: Response) => {
  console.log(`Delete the task with id ${req.body?.id}`);
});

export default routes;
