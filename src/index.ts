import express, { Request, Response, json } from "express";
import httpStatus from "http-status";
import dotenv from "dotenv";
import routes from "@/routes/index-routes";

const app = express();

dotenv.config();
app.use(json());
app.use(routes);

app.get("/health", (req: Request, res: Response) => {
  res.sendStatus(httpStatus.OK);
});

const port: number = parseInt(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
