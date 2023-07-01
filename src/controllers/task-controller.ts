import { Request, Response } from "express";
import httpStatus from "http-status";
import * as taskService from "@/services/task-service";
import { Task, CreateTask, EditTasks } from "@/protocols/task-protocol";

export async function createTask(req: Request, res: Response) {
  const { title, description, date, status } = req.body as Task;

  try {
    await taskService.createTask({ title, description, date, status });
    res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    console.log(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }
}

export async function readTask(req: Request, res: Response) {
  try {
    const allTasks: CreateTask[] = await taskService.readTask();
    res.status(httpStatus.OK).send(allTasks);
  } catch (error) {
    console.log(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }
}

export async function updateTask(req: Request, res: Response) {
  const { id } = req.params;
  const { title, description, date, status } = req.body as EditTasks;

  try {
    await taskService.updateTask({ id, title, description, date, status });
    res.sendStatus(httpStatus.OK);
  } catch (error) {
    console.log(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }
}

export async function deleteTask(req: Request, res: Response) {
  const id: number = parseInt(req.params.id);
  try {
    const taskExists = await taskService.deleteTask(id);
    if (!taskExists) {
      return res.sendStatus(httpStatus.NOT_FOUND);
    }
    res.sendStatus(httpStatus.OK);
  } catch (error) {
    console.log(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }
}


