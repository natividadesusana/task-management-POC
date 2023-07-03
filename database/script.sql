CREATE TABLE "task" (
  "id" SERIAL NOT NULL,
  "title" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  "date" TEXT NOT NULL,
  "status" BOOLEAN NOT NULL,
  "createdAt" TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  
  CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);


INSERT INTO "task" ("title", "description", "date", "status")
VALUES ('Costureira', 'Ir na costureira', '10/06/2023', true);

INSERT INTO "task" ("title", "description", "date", "status")
VALUES ('Passeios', 'Curitiba, Rio Grande, Lagoa', '20/07/2023', false);

INSERT INTO "task" ("title", "description", "date", "status")
VALUES ('Aniversário', 'Ir aniversário Clodovaldo', '12/12/2023', false);


SELECT * FROM "task";