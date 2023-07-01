import Joi from "joi";
import { CreateTask } from "@/protocols/task-protocol";

export const taskSchema = Joi.object<CreateTask>({
  title: Joi.string().required(),
  description: Joi.string().required(),
  date: Joi.string().pattern(/^\d{2}\/\d{2}\/\d{4}$/).required(),
  status: Joi.boolean().required(),
});
