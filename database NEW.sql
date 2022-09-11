---- START -- COPY -- & -- PASTE -- HERE ----

---- USER TABLE  --
-- added user access level
-- user defaults to level 2 (Group & Provider)
CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"username" varchar(25) NOT NULL UNIQUE,
	"password" varchar(500) NOT NULL,
	"access_level" int NOT NULL
);

---- GROUP TABLE ---- 
-- Add "NOT NULL" to columns laters. Allow NULL for testing
CREATE TABLE "group" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" int REFERENCES "user"("id") NOT NULL UNIQUE,
	"name" varchar(1000) NOT NULL DEFAULT 'My Name',
	"bio" varchar(1000) DEFAULT 'My Bio',
	"picture" varchar(1000) DEFAULT 
	'https://static.vecteezy.com/system/resources/thumbnails/007/319/936/small/user-profile-icon-vector.jpg',
	"website" varchar(1000) DEFAULT 'My Website',
	"email" varchar(1000) DEFAULT 'My email',
	"phone" varchar(50) DEFAULT 'My phone',
	"street" varchar(1000) DEFAULT 'My street',
	"city" varchar(1000) DEFAULT 'My city',
	"state" varchar(1000) DEFAULT 'My state',
	"zipcode" varchar(1000) DEFAULT 'My zipcode'
);


---- PROVIDER TABLE ----
-- Add "NOT NULL" to columns laters. Allow NULL for testing
CREATE TABLE "provider" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" int REFERENCES "user"("id") NOT NULL UNIQUE,
	"name" varchar(100) DEFAULT 'My Name',
	"bio" varchar(1000) DEFAULT 'My Bio',
	"picture" varchar(1000) DEFAULT 
	'https://static.vecteezy.com/system/resources/thumbnails/007/319/936/small/user-profile-icon-vector.jpg',
	"phone" varchar(50) DEFAULT 'My phone',
	"email" varchar(100) DEFAULT 'My email',
	"availability" varchar(1000) DEFAULT 'My Availability',
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

---- Availability Table ----
CREATE TABLE "availability" (
	"id" serial PRIMARY KEY NOT NULL,
	"availability" varchar(255) 
);


------------- CREATE JUNCTION TABLES --------------------
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
	"occupation_id" int REFERENCES "occupations"("id") NOT NULL
);

---- availability JUNCTION TABLE ----
CREATE TABLE "provider_availability" (
	"id" serial PRIMARY KEY NOT NULL,
	"provider_id" int REFERENCES "provider"("id") NOT NULL,
	"availability_id" int REFERENCES "availability"("id") NOT NULL
);


------------------ ACTUAL DATA ------------------
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

---- INSERT availability TABLE ----
INSERT INTO "availability" ("availability") VALUES
('My office is open Monday through Friday'),
('My office offers evening and weekend appointments'),
('Please contact me for appointment availability');

-- DUMMY DATA -- 
--  USER Dummy Data --
INSERT INTO "user" ( "username", "password", "access_level") VALUES 
( 'admin', '$2a$10$OsPuAKcp4ip.sb2zZUM9vuJwhoRdGdJVcbIlWobbX4XbFPcg8Zjey', 1),
( 'group1', '$2a$10$OsPuAKcp4ip.sb2zZUM9vuJwhoRdGdJVcbIlWobbX4XbFPcg8Zjey', 3),
( 'group2', '$2a$10$OsPuAKcp4ip.sb2zZUM9vuJwhoRdGdJVcbIlWobbX4XbFPcg8Zjey', 3),
( 'provider1', '$2a$10$OsPuAKcp4ip.sb2zZUM9vuJwhoRdGdJVcbIlWobbX4XbFPcg8Zjey', 2),
( 'provider2', '$2a$10$OsPuAKcp4ip.sb2zZUM9vuJwhoRdGdJVcbIlWobbX4XbFPcg8Zjey', 2),
( 'provider3', '$2a$10$OsPuAKcp4ip.sb2zZUM9vuJwhoRdGdJVcbIlWobbX4XbFPcg8Zjey', 2),
( 'provider4', '$2a$10$OsPuAKcp4ip.sb2zZUM9vuJwhoRdGdJVcbIlWobbX4XbFPcg8Zjey', 2);

--  GROUP Dummy Data --
INSERT INTO "group" ( "user_id", "name", "bio", "website", "email", "phone", "street", "city", "state", "zipcode") VALUES 
(2, 'Group 1', 'My bio', 'My website', 'My email', 'My phone', 'My street', 'My city', 'My state', 'My zipcode');
INSERT INTO "group" ( "user_id", "name" ) VALUES 
(3, 'group 2');

--  PROVIDER Dummy Data --
INSERT INTO "provider" ( "user_id", "name", "bio", "picture","phone", "email", "availability", "group_id") VALUES
(4, 
'Provider 1 Name', 
'My bio',
 'https://static.vecteezy.com/system/resources/thumbnails/007/319/936/small/user-profile-icon-vector.jpg', 
 'My phone', 'My email', 
 'My availability', 
 1);
INSERT INTO "provider" ("user_id", "name") VALUES
(5, 'Provider 2 Name'),
(6, 'Provider 3 Name'),
(7, 'Provider 4 Name') ;

-- provider_specializations JUNCTION TABLE DUMMY DATA --  
INSERT INTO "provider_specializations" ( "provider_id", "specializations_id") VALUES 
( 1, 1), -- LGBTQ
( 2, 2), -- POC Specific
( 3, 3), -- Disability Specific
( 4, 1), -- LGBTQ
( 4, 2), -- POC Specific
( 4, 3), -- Disability Specific
( 4, 4); -- Addiction


-- provider_specializations JUNCTION TABLE DUMMY DATA --  
INSERT INTO "provider_insurance_plan" ( "provider_id", "insurance_plan_id") VALUES 
( 1, 1), -- Blue Cross and Blue Shield of Minnesota
( 2, 2), -- HealthPartners
( 3, 3), -- Medica of Minnesota
( 4, 1), -- Blue Cross and Blue Shield of Minnesota
( 4, 2), -- HealthPartners
( 4, 3), -- Medica of Minnesota
( 4, 4); -- Quartz


-- provider_specializations JUNCTION TABLE DUMMY DATA --  
INSERT INTO "provider_service_type" ( "provider_id", "service_type_id") VALUES 
( 1, 1), -- Online
( 2, 2), -- InPerson
( 3, 3), -- Over the Phone
( 4, 1), -- Online
( 4, 2), -- InPerson
( 4, 3), -- Over the Phone
( 4, 4); -- Inpatient


INSERT INTO "provider_occupation" ( "provider_id", "occupation_id") VALUES 
(1, 1), -- Psychologist
(2, 2), -- Counselor
(3, 3), -- Certified Alcohol and Drug Abuse Counselor
(4, 1), -- Psychologist
(4, 2), -- Counselor
(4, 3), -- Certified Alcohol and Drug Abuse Counselor
(4, 4); -- Clinician

---- STOP -- COPY -- & -- PASTE -- HERE ----



---------------- GETS ---------------- 
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
JOIN "user" ON "provider"."user_id" = "user"."id" WHERE "user"."id" = 4;

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

-- SEARCH ALL Providers by NAME -- Ascending and Descending
SELECT * FROM "provider" WHERE "name" ILIKE '%rovid%' ORDER BY "provider"."name" ASC;
SELECT * FROM "provider" WHERE "name" ILIKE '%rovid%' ORDER BY "provider"."name" DESC;

-- SEARCH ALL Groups by NAME -- Ascending and Descending
SELECT * FROM "group" WHERE "name" ILIKE '%group%' ORDER BY "group"."name" ASC;
SELECT * FROM "group" WHERE "name" ILIKE '%group%' ORDER BY "group"."name" DESC;

---------------- SEARCH by ONE thing ---------------- 
-- SEARCH Providers by 1 SPECIALIZATION -- 
SELECT * FROM "provider" 
JOIN "provider_specializations" 
ON "provider"."id" = "provider_specializations"."provider_id"
JOIN "specializations"
ON "specializations"."id" = "provider_specializations"."id"
WHERE "specializations"."specialization" ILIKE '%POC Specific%' 
ORDER BY "provider"."name";

-- SEARCH Providers by 1 OCCUPATION -- 
SELECT * FROM "provider" 
JOIN "provider_occupation" 
ON "provider"."id" = "provider_occupation"."provider_id"
JOIN "occupations"
ON "occupations"."id" = "provider_occupation"."id"
WHERE "occupations"."occupation" ILIKE '%counselor%' 
ORDER BY "provider"."name";

-- SEARCH Providers by 1 SERVICE_TYPE -- 
SELECT * FROM "provider" 
JOIN "provider_service_type" 
ON "provider"."id" = "provider_service_type"."provider_id"
JOIN "service_type"
ON "service_type"."id" = "provider_service_type"."id"
WHERE "service_type"."service" ILIKE '%line%' 
ORDER BY "provider"."name";

-- SEARCH Providers by 1 INSURANCE -- 
SELECT * FROM "provider" 
JOIN "provider_insurance_plan" 
ON "provider"."id" = "provider_insurance_plan"."provider_id"
JOIN "insurance_plan"
ON "insurance_plan"."id" = "provider_insurance_plan"."id"
WHERE "insurance_plan"."insurance" ILIKE '%blue%' 
ORDER BY "provider"."name";




---------------- SEARCH By MULTIPLE Things ----------------
-- SEARCH Providers by MULITPLE Insurance -- (12 posible selections)
SELECT *
FROM "provider" 
JOIN "provider_insurance_plan" 
ON "provider"."id" = "provider_insurance_plan"."provider_id"
JOIN "insurance_plan"
ON "insurance_plan"."id" = "provider_insurance_plan"."insurance_plan_id"
WHERE "insurance_plan"."insurance" ILIKE '%medica%' 
OR "insurance_plan"."insurance" ILIKE '%health%'
OR "insurance_plan"."insurance" ILIKE '%quartz%'
OR "insurance_plan"."insurance" ILIKE ''
OR "insurance_plan"."insurance" ILIKE ''
OR "insurance_plan"."insurance" ILIKE ''
OR "insurance_plan"."insurance" ILIKE ''
OR "insurance_plan"."insurance" ILIKE ''
OR "insurance_plan"."insurance" ILIKE ''
OR "insurance_plan"."insurance" ILIKE ''
OR "insurance_plan"."insurance" ILIKE ''
OR "insurance_plan"."insurance" ILIKE ''
ORDER BY "provider"."name";


-- GET ALL Providers and their INSURANCE, -- THIS DOUBLE CHECKS the above SEARCH by MULITPLE Insurance
SELECT "provider"."name", "insurance_plan"."id", "insurance_plan"."insurance" FROM "provider" 
JOIN "provider_insurance_plan" 
ON "provider"."id" = "provider_insurance_plan"."provider_id"
JOIN "insurance_plan"
ON "insurance_plan"."id" = "provider_insurance_plan"."insurance_plan_id"
ORDER BY "provider"."name";

-- SEARCH Providers by MULITPLE specialization -- (22 posible selections)
SELECT *
FROM "provider" 
JOIN "provider_specializations" 
ON "provider"."id" = "provider_specializations"."provider_id"
JOIN "specializations"
ON "specializations"."id" = "provider_specializations"."specializations_id"
WHERE "specializations"."specialization" ILIKE '%ADH%' 
OR "specializations"."specialization" ILIKE '%LGBT%'
OR "specializations"."specialization" ILIKE '%COVID%'
OR "specializations"."specialization" ILIKE '%OCD%'
OR "specializations"."specialization" ILIKE ''
OR "specializations"."specialization" ILIKE ''
OR "specializations"."specialization" ILIKE ''
OR "specializations"."specialization" ILIKE ''
OR "specializations"."specialization" ILIKE ''
OR "specializations"."specialization" ILIKE ''
OR "specializations"."specialization" ILIKE ''
OR "specializations"."specialization" ILIKE ''
OR "specializations"."specialization" ILIKE ''
OR "specializations"."specialization" ILIKE ''
OR "specializations"."specialization" ILIKE ''
OR "specializations"."specialization" ILIKE ''
OR "specializations"."specialization" ILIKE ''
OR "specializations"."specialization" ILIKE ''
OR "specializations"."specialization" ILIKE ''
OR "specializations"."specialization" ILIKE ''
OR "specializations"."specialization" ILIKE ''
OR "specializations"."specialization" ILIKE ''
ORDER BY "provider"."name" ASC;


-- SEARCH Providers by MULITPLE specialization -- (5 posible selections)
SELECT * FROM "provider" 
JOIN "provider_service_type" 
ON "provider"."id" = "provider_service_type"."provider_id"
JOIN "service_type"
ON "service_type"."id" = "provider_service_type"."id"
WHERE "service_type"."service" ILIKE '%online%' 
OR "service_type"."service" ILIKE '%phone%' 
OR "service_type"."service" ILIKE ''
OR "service_type"."service" ILIKE '' 
OR "service_type"."service" ILIKE ''  
ORDER BY "provider"."name";


-- SEARCH Providers by MULITPLE occupation -- (9 posible selections)
SELECT * FROM "provider" 
JOIN "provider_occupation" 
ON "provider"."id" = "provider_occupation"."provider_id"
JOIN "occupations"
ON "occupations"."id" = "provider_occupation"."id"
WHERE "occupations"."occupation" ILIKE '%Psychologist%' 
OR "occupations"."occupation" ILIKE '%counselor%'
OR "occupations"."occupation" ILIKE '' 
OR "occupations"."occupation" ILIKE '' 
OR "occupations"."occupation" ILIKE '' 
OR "occupations"."occupation" ILIKE '' 
OR "occupations"."occupation" ILIKE '' 
OR "occupations"."occupation" ILIKE '' 
OR "occupations"."occupation" ILIKE '' 
ORDER BY "provider"."name";




---------------- EDIT/UPDATE  ---------------- 
-- UPDATE - PROVIDER info by "Provider.user_ID"
UPDATE "provider" SET "name" = 'updated db name' WHERE "provider"."user_id" = 4;
UPDATE "provider" SET "bio" = 'updated db bio' WHERE "provider"."user_id" = 4;
UPDATE "provider" SET "phone" = 'updated db phone' WHERE "provider"."user_id" = 4;
UPDATE "provider" SET "email" = 'updated db email' WHERE "provider"."user_id" = 4;
UPDATE "provider" SET "phone" = 'updated db phone' WHERE "provider"."user_id" = 4;

-- UPDATE - GROUP info by "Provider.user_ID"
UPDATE "group" SET "name" = 'updated db name' WHERE "group"."user_id" = 2;
UPDATE "group" SET "bio" = 'updated db bio' WHERE "group"."user_id" = 2;
UPDATE "group" SET "website" = 'updated db website' WHERE "group"."user_id" = 2;
UPDATE "group" SET "email" = 'updated db email' WHERE "group"."user_id" = 2;
UPDATE "group" SET "phone" = 'updated db phone' WHERE "group"."user_id" = 2;
UPDATE "group" SET "street" = 'updated db email' WHERE "group"."user_id" = 2;
UPDATE "group" SET "city" = 'updated db city' WHERE "group"."user_id" = 2;
UPDATE "group" SET "state" = 'updated db phone' WHERE "group"."user_id" = 2;
UPDATE "group" SET "zipcode" = 'updated db zipcode' WHERE "group"."user_id" = 2;

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





---- THIS GETS EVERYTHING. Does't really work. Mostly here so anyone can test different JOINS ----
-- GET INSURANCE,service_type & specializations for ONE provider by provider.id --
SELECT  "provider"."name", "provider"."bio", "provider"."email", "provider"."name", "specializations"."specialization", "service_type"."service", "insurance_plan"."insurance" FROM "specializations"
JOIN "provider_specializations"
ON "provider_specializations"."specializations_id" = "specializations"."id"
JOIN "provider"
ON "provider"."id" = "provider_specializations"."provider_id"
JOIN "provider_insurance_plan" 
ON "provider_insurance_plan"."provider_id" = "provider"."id"
JOIN "insurance_plan"
ON "insurance_plan"."id" = "provider_insurance_plan"."insurance_plan_id"
JOIN "provider_service_type" 
ON "provider_service_type"."provider_id" = "provider"."id"
JOIN "service_type"
ON "service_type"."id" = "provider_service_type"."provider_id"
WHERE "provider"."id" = 1;

--insurance_plan
SELECT provider.name, array_agg(insurance_plan.insurance) as "accepted insurances" FROM provider
JOIN provider_insurance_plan ON provider_insurance_plan.provider_id = provider.id
JOIN insurance_plan ON insurance_plan.id = provider_insurance_plan.insurance_plan_id
where insurance_plan.insurance ilike '%health%'
or insurance_plan.insurance ilike ''
GROUP BY provider.name
order by provider.name asc;

--specializations
SELECT provider.name, provider.picture, array_agg(specializations.specialization) as "specialties" FROM provider
JOIN provider_specializations ON provider_specializations.provider_id = provider.id
JOIN specializations ON specializations.id = provider_specializations.specializations_id
group by provider.name, provider.picture
order by provider.name asc;

--specializations by id
SELECT provider.name, array_agg(specializations.specialization) FROM provider
JOIN provider_specializations ON provider_specializations.provider_id = provider.id
JOIN specializations ON specializations.id = provider_specializations.specializations_id
where specializations.specialization ilike '%l%'
group by provider.name
order by provider.name asc;

--occcupation
SELECT provider.name, array_agg(occupations.occupation) as "Occupation" FROM provider
JOIN provider_occupation ON provider_occupation.provider_id = provider.id
JOIN occupations ON occupations.id = provider_occupation.occupation_id
group by provider.name
order by provider.name asc;

SELECT occupations.occupation FROM occupations
JOIN provider_occupation ON provider_occupation.occupation_id = occupations.id
JOIN provider
ON provider.id = provider_occupation.occupation_id
WHERE provider.user_id = 4;



