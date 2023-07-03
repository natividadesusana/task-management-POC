# Task Management POC

## Routes

### >> Task Creation
- Creates a new task.

Endpoint:

    POST /task

Body:

    {
      "title": "Task Name",
      "description": "Task Description",
      "date": "05/12/2023",
      "status": false
    }

### >> Task List
- Retrieves all tasks.

Endpoint:

    GET /task

### >> Task Update
- Updates an existing task with the given ID.

Endpoint:

    PUT /task/:id

URL Parameters:
id: ID of the task to be updated.

Body:

    {
      "title": "New Task Name",
      "description": "New Task Description",
      "date": "06/07/2023",
      "status": true
    }

### >> Task Deletion
- Deletes an existing task with the given ID.

Endpoint:

    DELETE /task/:id

URL Parameters:
id: ID of the job to be deleted.

<hr>

➤  Remembering that the dates must follow the **"DD/MM/YYYY"** format and the task status is a **boolean** that represents the current state of the task, that is, if the task was completed, the user can add **true** ***to done*** and if not completed **false** for ***not done***.


