---- START -- COPY -- & -- PASTE -- HERE ----

---- USER TABLE  --
-- added user access level
-- user defaults to level 2 (Group & Provider)
CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"username" varchar(25) NOT NULL UNIQUE,
	"password" varchar(500) NOT NULL,
	"access_level" int NOT NULL DEFAULT 2
);

---- GROUP TABLE ---- 
-- Add "NOT NULL" to columns laters. Allow NULL for testing
CREATE TABLE "group" (
	"id" serial NOT NULL,
	"user_id" int REFERENCES "user"("id") NOT NULL,
	"name" varchar(100) NOT NULL,
	"bio" varchar(1000),
	"website" varchar(255),
	"email" varchar(255),
	"phone" varchar(255),
	"street" varchar(255),
	"city" varchar(100),
	"state" varchar(100),
	"zipcode" varchar(100)
);


---- PROVIDER TABLE ----
-- Add "NOT NULL" to columns laters. Allow NULL for testing
CREATE TABLE "provider" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" int REFERENCES "user"("id") NOT NULL,
	"name" varchar(100),
	"bio" varchar(1000),
	"picture" varchar(1000),
	"phone" varchar(10),
	"email" varchar(100),
	"insurance_id" int,
	"occupation_id" int,
	"specialization_id" int,
	"service_id" int,
	"availability" varchar(1000),
	"group_id" int 
);


---- specializations TABLE ----
CREATE TABLE "specializations" (
	"id" serial PRIMARY KEY  NOT NULL,
	"specialization" varchar(100)
);

---- insurance_plan TABLE ----
CREATE TABLE "insurance_plan" (
	"id" serial PRIMARY KEY NOT NULL,
	"insurance" varchar(100)
);

---- service_type TABLE ----
CREATE TABLE "service_type" (
	"id" serial PRIMARY KEY NOT NULL,
	"service" varchar(255) 
);
---- occupations TABLE ----
CREATE TABLE "occupations" (
	"id" serial PRIMARY KEY NOT NULL,
	"occupation" varchar(255) 
);

-- JUNCTION TABLES --

---- specializations JUNCTION TABLE ----
CREATE TABLE "provider_specializations" (
	"id" serial PRIMARY KEY NOT NULL,
	"provider_id" int REFERENCES "provider"("id") NOT NULL,
	"specializations_id" int REFERENCES "specializations"("id") NOT NULL
);

---- insurance_plan JUNCTION TABLE ----
CREATE TABLE "provider_insurance_plan" (
	"id" serial PRIMARY KEY NOT NULL,
	"provider_id" int REFERENCES "provider"("id") NOT NULL,
	"insurance_plan_id" int REFERENCES "insurance_plan"("id") NOT NULL
);

---- service_type JUNCTION TABLE ----
CREATE TABLE "provider_service_type" (
	"id" serial PRIMARY KEY NOT NULL,
	"provider_id" int REFERENCES "provider"("id") NOT NULL,
	"service_type_id" int REFERENCES "service_type"("id") NOT NULL
);

---- provider_occupation JUNCTION TABLE ----
CREATE TABLE "provider_occupation" (
	"id" serial PRIMARY KEY NOT NULL,
	"provider_id" int REFERENCES "provider"("id") NOT NULL,
	"occupation_id" int REFERENCES "specializations"("id") NOT NULL
);


-- ACTUAL DATA --
---- INSERT specializations TABLE ----
INSERT INTO "specializations" ("specialization") VALUES
('LGBTQ Specific'),
('POC Specific'),
('Disability Specific'),
('Addiction'),
('Anxiety'),
('ADHD'),
('Autism'),
('Bipolar'),
('Child Psychiatry'),
('Cognitive-behavioral therapy'),
('COVID-related'),
('HOH'),
('Depression'),
('Crisis Response'),
('Eating Disorders'),
('Grief'),
('Group Therapy'),
('Family Counseling'),
('Medication Management'),
('OCD'),
('PTSD'),
('Diagnosis');

---- INSERT insurance_plan TABLE ----
INSERT INTO "insurance_plan" ("insurance") VALUES
('Blue Cross and Blue Shield of Minnesota'),
('HealthPartners'),
('Medica of Minnesota'),
('Quartz'),
('PreferredOne Insurance Company'),
('Golden Rule Insurance Company'),
('Independence American Insurance Company'),
('Ucare'),
('Humana'),
('Cigna'),
('Silverscript'),
('Medicare Insurance Providers in Minnesota');

---- INSERT service_type TABLE ----
INSERT INTO "service_type" ("service") VALUES
('Online'),
('In-Person'),
('Over the Phone'),
('Inpatient'),
('Outpatient');

---- INSERT occupation TABLE ----
INSERT INTO "occupations" ("occupation") VALUES
('Psychologist'),
('Counselor'),
('Certified Alcohol and Drug Abuse Counselor'),
('Clinician'),
('Clinical Social Worker'),
('Psychiatrist'),
('Mental Health Nurse Practitioner'),
('Family Nurse Practitioner'),
('Peer Specialist');

-- DUMMY DATA -- 
--  USER Dummy Data --
INSERT INTO "user" ("id", "username", "password", "access_level") VALUES 
(1, 'admin', 'admin', 1),
(2, 'group', 'group', 2),
(3, 'provider', 'provider', 2);

--  GROUP Dummy Data --
INSERT INTO "group" ( "id", "user_id", "name", "bio", "website", "email", "phone", "street", "city", "state", "zipcode") VALUES 
(1, 2, 'group1', 'bio', 'website', 'email', 'phone', 'street', 'city', 'state', 'zipcode');

--  PROVIDER Dummy Data --
INSERT INTO "provider" ("id", "user_id", "name", "bio", "picture","phone", "email", "insurance_id", "occupation_id", "specialization_id", "service_id", "availability", "group_id") VALUES
(1, 3, 'provider1', 'bio', 'pic', 'phone', 'email', 1, 1, 1, 1, 'availability', 1);

-- provider_specializations JUNCTION TABLE DUMMY DATA --  
INSERT INTO "provider_specializations" ( "provider_id", "specializations_id") VALUES 
( 1, 1), -- LGBTQ
( 1, 6), -- ADHD
( 1, 11); -- COVID


-- provider_specializations JUNCTION TABLE DUMMY DATA --  
INSERT INTO "provider_insurance_plan" ( "provider_id", "insurance_plan_id") VALUES 
( 1, 2), -- HealthPartners
( 1, 3), -- Medica of Minnesota
( 1, 10); -- CIGNA


-- provider_specializations JUNCTION TABLE DUMMY DATA --  
INSERT INTO "provider_service_type" ( "provider_id", "service_type_id") VALUES 
( 1, 1), -- Online
( 1, 2), -- InPerson
( 1, 4); -- Inpatient


INSERT INTO "provider_occupation" ( "provider_id", "occupation_id") VALUES 
(1, 1),
(1, 2),
(1, 2);

---- STOP -- COPY -- & -- PASTE -- HERE ----




---- GET ALL  ---- 
SELECT * FROM "user"; -- GET ALL USERS

SELECT * FROM "group"  -- GET ALL GROUPS - alphabetically
ORDER BY "group";

SELECT * FROM "provider" -- GET ALL PROVIDERS - alphabetically
ORDER BY "provider"; 

SELECT * FROM "specializations" -- GET ALL specializations - alphabetically
ORDER BY "specialization"; 

SELECT * FROM "insurance_plan" -- GET ALL insurance_plan - alphabetically
ORDER BY "insurance"; 

SELECT * FROM "service_type"  -- GET ALL service_type
ORDER BY "id";

SELECT * FROM "occupations" -- GET ALL occupations - alphabetically
ORDER BY "occupation";



---- GET ONE BY ID ---- 
SELECT * FROM "user" WHERE "user"."id" = 1; -- GET ONE USER BY "id" example: 1
SELECT * FROM "group" WHERE "group"."id" = 1; -- GET ONE GROUP BY "id" example: 1
SELECT * FROM "provider" WHERE "provider"."id" = 1; -- GET ONE PROVIDER BY "id" example: 1
SELECT * FROM "provider" WHERE "provider"."id" = 1; -- GET ONE PROVIDER BY "id" example: 1

--GET ONE GROUP BY USER.ID, example: 2
SELECT * FROM "group" 
JOIN "user" ON "group"."user_id" = "user"."id" WHERE "user"."id" = 2;

--GET ONE PROVIDER BY USER.ID, example: 3
SELECT * FROM "provider" 
JOIN "user" ON "provider"."user_id" = "user"."id" WHERE "user"."id" = 3;

-- GET PROVIDER INSURANCE BY PROVIDER.ID -- 
SELECT insurance_plan.insurance FROM insurance_plan
JOIN provider_insurance_plan
ON provider_insurance_plan.insurance_plan_id = insurance_plan.id
WHERE provider_insurance_plan.provider_id = 1;

-- GET PROVIDER service_type BY PROVIDER.ID -- 
SELECT service_type.service FROM service_type
JOIN provider_service_type 
ON provider_service_type.service_type_id = service_type.id
WHERE provider_service_type.provider_id = 1;

-- GET PROVIDER specializations BY PROVIDER.ID --
SELECT "specializations"."specialization" FROM "specializations"
JOIN "provider_specializations"
ON "provider_specializations"."specializations_id" = "specializations"."id"
WHERE "provider_specializations"."provider_id" = 1;

-- GET PROVIDER occupations BY PROVIDER.ID --
SELECT "occupations"."occupation" FROM "occupations"
JOIN "provider_occupation"
ON "provider_occupation"."occupation_id" = "occupations"."id"
WHERE "provider_occupation"."provider_id" = 1;

-- SEARCHS --
-- SEARCH Providers by NAME -- Ascending and Descending
SELECT * FROM "provider" WHERE "name" ILIKE '%rovid%' ORDER BY "provider"."name" ASC;
SELECT * FROM "provider" WHERE "name" ILIKE '%rovid%' ORDER BY "provider"."name" DESC;

-- SEARCH Groups by NAME -- Ascending and Descending
SELECT * FROM "group" WHERE "name" ILIKE '%group%' ORDER BY "group"."name" ASC;
SELECT * FROM "group" WHERE "name" ILIKE '%group%' ORDER BY "group"."name" DESC;


-- SEARCH Providers by SPECIALIZATION -- 
SELECT * FROM "provider" 
JOIN "provider_specializations" 
ON "provider"."id" = "provider_specializations"."provider_id"
JOIN "specializations"
ON "specializations"."id" = "provider_specializations"."id"
WHERE "specializations"."specialization" ILIKE '%POC Specific%' 
ORDER BY "provider"."name";

-- SEARCH Providers by OCCUPATION -- 
SELECT * FROM "provider" 
JOIN "provider_occupation" 
ON "provider"."id" = "provider_occupation"."provider_id"
JOIN "occupations"
ON "occupations"."id" = "provider_occupation"."id"
WHERE "occupations"."occupation" ILIKE '%counselor%' 
ORDER BY "provider"."name";

-- SEARCH Providers by SERVICE_TYPE -- 
SELECT * FROM "provider" 
JOIN "provider_service_type" 
ON "provider"."id" = "provider_service_type"."provider_id"
JOIN "service_type"
ON "service_type"."id" = "provider_service_type"."id"
WHERE "service_type"."service" ILIKE '%line%' 
ORDER BY "provider"."name";

-- SEARCH Providers by SERVICE_TYPE -- 
SELECT * FROM "provider" 
JOIN "provider_insurance_plan" 
ON "provider"."id" = "provider_insurance_plan"."provider_id"
JOIN "insurance_plan"
ON "insurance_plan"."id" = "provider_insurance_plan"."id"
WHERE "insurance_plan"."insurance" ILIKE '%blue%' 
ORDER BY "provider"."name";

-----! DELETE/DROP TABLES !-----
DROP TABLE "provider_specializations";
DROP TABLE "provider_insurance_plan";
DROP TABLE "provider_service_type";
DROP TABLE "provider_occupation";
DROP TABLE "specializations";
DROP TABLE "insurance_plan";
DROP TABLE "service_type";
DROP TABLE "occupations";
DROP TABLE "provider";
DROP TABLE "group";
DROP TABLE "user"; 
-----! DELETE/DROP TABLES !-----