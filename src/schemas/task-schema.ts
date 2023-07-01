import Joi from "joi";
import { Task } from "@/protocols/task-protocol";

export const taskSchema = Joi.object<Task>({
  title: Joi.string().required(),
  description: Joi.string().required(),
  date: Joi.string().required(),
  status: Joi.boolean().required(),
});
