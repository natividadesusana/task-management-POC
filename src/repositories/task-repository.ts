import { EditTasks, Task } from "@/protocols/task-protocol";
import { connection } from "@/database/database-connection";

export async function createTask({ title, description, date, status }) {
  const newTask = await connection.query<Task>(`
  INSERT INTO "task" ("title", "description", "date", "status")
  VALUES ($1, $2, $3, $4)`,
   [title, description, date, status]);

  return newTask.rows[0];
}

export async function readTask() {
  const readTask = await connection.query<Task>(`SELECT * FROM task`);
  return readTask.rows;
}

export async function updateTask({ id, title, description, date, status }: EditTasks) {
  const updateTask = await connection.query<EditTasks>(`
  UPDATE "task"
  SET "title" = $1, "description" = $2, "date" = $3, "status" = $4
  WHERE "id" = $5`,
    [title, description, date, status, id]
  );
  return updateTask.rows[0];
}

export async function deleteTask(id: number) {
  const deleteTask = await connection.query<EditTasks>(`
  DELETE FROM "task"
  WHERE "id" = $1`,
    [id]
  );
  return deleteTask.rowCount > 0;
}
