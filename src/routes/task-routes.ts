import { Router } from "express";
import * as taskCrontroller from "../controllers/task-controller";
import validateSchema from "../middlewares/validateSchema-middleware";
import { taskSchema } from "../schemas/task-schema";

const taskRouter = Router();

taskRouter.post("/task", validateSchema(taskSchema), taskCrontroller.createTask);
taskRouter.get("/task", taskCrontroller.readTask);
taskRouter.put("/task/:id", validateSchema(taskSchema), taskCrontroller.updateTask);
taskRouter.delete("/task/:id", taskCrontroller.deleteTask);

export default taskRouter;
