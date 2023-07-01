import * as taskRepository from "@/repositories/task-repository";
import { Task } from "@/protocols/task-protocol";

export async function createTask(task: Task) {
  return taskRepository.createTask(task);
}

export async function readTask() {
  const tasks = await taskRepository.readTask();
  return tasks;
}

export async function updateTask({ id, title, description, date, status }) {
  return taskRepository.updateTask({ id, title, description, date, status });
}

export async function deleteTask(id: number) {
  return taskRepository.deleteTask(id);
}
