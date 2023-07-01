import * as taskRepository from "../repositories/task-repository";
import { CreateTask, EditTasks } from "../protocols/task-protocol";
import format from "date-fns/format";

export async function createTask(task: CreateTask) {
  return taskRepository.createTask(task);
}

export async function readTask() {
  try {
    const tasks = await taskRepository.readTask();
    const formattedTasks = tasks.map(task => ({
      ...task,
      createdAt: format(new Date(task.createdAt), 'dd/MM/yyyy HH:mm:ss'),
    }));
    return formattedTasks;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to read tasks!");
  }
}

export async function updateTask(id: number, editTask: EditTasks) {
  return taskRepository.updateTask(id, editTask);
}

export async function deleteTask(id: number) {
  return taskRepository.deleteTask(id);
}
