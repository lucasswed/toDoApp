import "dotenv/config";
import express, { Express } from "express";
import routes from "./routes";

const app: Express = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use( express.urlencoded({ extended: true }));
app.use(routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})