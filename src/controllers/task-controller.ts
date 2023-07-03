import { Request, Response } from "express";
import httpStatus from "http-status";
import * as taskService from "@/services/task-service";
import { CreateTask, EditTasks } from "@/protocols/task-protocol";

export async function createTask(req: Request, res: Response) {
  const task = req.body as CreateTask;

  try {
    await taskService.createTask(task);
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
  const id: number = parseInt(req.params.id);
  const editTask = req.body as EditTasks;

  try {
    await taskService.updateTask(id, editTask);
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


