

-- database name: 'client_project'. Can be anything, just remember to change it in 'server/modules/pool.js' to match.

-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

---- UPDATED for User Access Levels below --
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "accessLevel" int NOT NULL
);

---- MHP TABLE ----
CREATE TABLE "MHP" ( 
	"id" serial NOT NULL,
	"userId" int NOT NULL,
	"name" varchar(100) NOT NULL,
	"bio" varchar(1000),
	"picture" varchar(1000),
	"email" varchar(100) NOT NULL,
	"insuranceId" int NOT NULL,
	"occupationId" varchar(500) NOT NULL,
	"specializationId" int NOT NULL,
	"serviceId" int NOT NULL,
	"availability" varchar(1000) NOT NULL,
	"MHGId" int
);
ALTER TABLE "MHP" ADD CONSTRAINT "MHP" FOREIGN KEY ("userId") REFERENCES "user"("id"); -- Make userId a Foreign Key, that referencees user.id


---- MHG TABLE ----
CREATE TABLE "MHG" (
	"id" serial NOT NULL,
	"name" varchar(100) NOT NULL,
	"userId" int NOT NULL,
	"bio" varchar(1000) NOT NULL,
	"website" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"phone" varchar(255) NOT NULL,
	"street" varchar(255),
	"city" varchar(100),
	"state" varchar(100),
	"zipcode" varchar(100)
);
ALTER TABLE "MHG" ADD CONSTRAINT "MHG" FOREIGN KEY ("userId") REFERENCES "user"("id"); -- Make userId a Foreign Key, that referencees user.id






---- ALL GETS ---- 

--GET ALL MHP(PROVIDER) info, by user.id
SELECT * FROM "MHP" 
JOIN "user" ON "MHP"."userId" = "user"."id" WHERE "user"."id" = 2;  -- 2 would be a variable, and sanitized as: $1. 

--GET ALL MHG(GROUP) info, by user.id
SELECT * FROM "MHG" 
JOIN "user" ON "MHG"."userId" = "user"."id" WHERE "user"."id" = 1; -- 2 would be a variable, and sanitized as: $1. 
