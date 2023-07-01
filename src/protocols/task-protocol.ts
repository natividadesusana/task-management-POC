export type Task = {
  id?: number,
  title: string;
  description: string;
  date: string;
  status: boolean;
};

export type EditTasks = {
  id?: number,
  title?: string,
  description?: number,
  date?: number,
  status?: boolean
}

export type CreateTask = Omit<Task, "id">;
