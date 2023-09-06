import { Router, type Request, type Response } from "express";

const routes: Router = Router();

routes.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

export default routes;
