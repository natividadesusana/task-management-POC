export type Task = {
  id?: number,
  title: string;
  description: string;
  date: string;
  status: boolean;
  createdAt: string;
};

export type EditTasks = {
  id?: number,
  title?: string,
  description?: string,
  date?: string;
  status?: boolean
}

export type CreateTask = Omit<Task, "id">;
