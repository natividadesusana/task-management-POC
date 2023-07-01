import { Router } from "express";
import taskRouter from "../routes/task-routes";

const router = Router();

router.use(taskRouter);

export default router;