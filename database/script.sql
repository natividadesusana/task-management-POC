CREATE TABLE "task" (
	"id" SERIAL NOT NULL,
	"title" TEXT NOT NULL,
	"description" TEXT NOT NULL,
	"date" TEXT NOT NULL,
	"status" BOOLEAN NOT NULL
	
	CONSTRAINT "task_pkey" PRIMARY KEY ("id")
);

SELECT * FROM "task";

INSERT INTO "task" ("title", "description", "date", "status") VALUES ("Compras", "Comprar banana", "2023-02-01", "true");