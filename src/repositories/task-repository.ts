import { CreateTask, EditTasks, Task } from "@/protocols/task-protocol";
import { connection } from "@/database/database-connection";

export async function createTask(task: CreateTask) {
  const { title, description, date, status } = task;

  try {
    const newTask = await connection.query<Task>(
      `
      INSERT INTO "task" ("title", "description", "date", "status")
      VALUES ($1, $2, $3, $4)
      `,
      [title, description, date, status]
    );

    return newTask.rows[0];
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create a task!");
  }
}

export async function readTask() {
  try {
    const readTask = await connection.query<Task>(`SELECT * FROM task`);
    return readTask.rows;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to read tasks!");
  }
}

export async function updateTask(id: number, editTask: EditTasks) {
  const { title, description, date, status } = editTask;
  try {
    const updateTask = await connection.query<EditTasks>(
      `
      UPDATE "task"
      SET "title" = $1, "description" = $2, "date" = $3, "status" = $4
      WHERE "id" = $5
      `,
      [title, description, date, status, id]
    );

    if (updateTask.rowCount === 0) {
      throw new Error("This id doesn't exist!");
    }
    return updateTask.rows[0];
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update a task!");
  }
}

export async function deleteTask(id: number) {
  try {
    const deleteTask = await connection.query<EditTasks>(
      `
      DELETE FROM "task"
      WHERE "id" = $1
      `,
      [id]
    );
    return deleteTask.rowCount > 0;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete a task!");
  }
}
