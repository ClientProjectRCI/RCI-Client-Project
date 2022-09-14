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
	"user_id" int REFERENCES "user"("id") ON DELETE CASCADE NOT NULL UNIQUE,
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
	"user_id" int REFERENCES "user"("id") ON DELETE CASCADE NOT NULL UNIQUE,
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

---- Availability Table -- Not using anymore
--CREATE TABLE "availability" (
--	"id" serial PRIMARY KEY NOT NULL,
--	"availability" varchar(255) 
--);


------------- CREATE JUNCTION TABLES --------------------
---- specializations JUNCTION TABLE ----
CREATE TABLE "provider_specializations" (
	"id" serial PRIMARY KEY NOT NULL,
	"provider_id" int REFERENCES "provider"("id") ON DELETE CASCADE NOT NULL,
	"specializations_id" int REFERENCES "specializations"("id") NOT NULL
);

---- insurance_plan JUNCTION TABLE ----
CREATE TABLE "provider_insurance_plan" (
	"id" serial PRIMARY KEY NOT NULL,
	"provider_id" int REFERENCES "provider"("id") ON DELETE CASCADE NOT NULL,
	"insurance_plan_id" int REFERENCES "insurance_plan"("id") NOT NULL
);

---- service_type JUNCTION TABLE ----
CREATE TABLE "provider_service_type" (
	"id" serial PRIMARY KEY NOT NULL,
	"provider_id" int REFERENCES "provider"("id") ON DELETE CASCADE NOT NULL,
	"service_type_id" int REFERENCES "service_type"("id") NOT NULL
);

---- provider_occupation JUNCTION TABLE ----
CREATE TABLE "provider_occupation" (
	"id" serial PRIMARY KEY NOT NULL,
	"provider_id" int REFERENCES "provider"("id") ON DELETE CASCADE NOT NULL,
	"occupation_id" int REFERENCES "occupations"("id") NOT NULL
);

---- availability JUNCTION TABLE -- Not using anymore
-- CREATE TABLE "provider_availability" (
-- 	"id" serial PRIMARY KEY NOT NULL,
-- 	"provider_id" int REFERENCES "provider"("id") NOT NULL,
-- 	"availability_id" int REFERENCES "availability"("id") NOT NULL
-- );


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

---- INSERT availability TABLE -- Not using anymore
--INSERT INTO "availability" ("availability") VALUES
--('My office is open Monday through Friday'),
--('My office offers evening and weekend appointments'),
--('Please contact me for appointment availability');

-- DUMMY DATA --   
--  USER Dummy Data --
INSERT INTO "user" ( "username", "password", "access_level") VALUES 
( 'admin', '$2a$10$OsPuAKcp4ip.sb2zZUM9vuJwhoRdGdJVcbIlWobbX4XbFPcg8Zjey', 1),  --user 1
( 'group1', '$2a$10$OsPuAKcp4ip.sb2zZUM9vuJwhoRdGdJVcbIlWobbX4XbFPcg8Zjey', 3), --user 2
( 'group2', '$2a$10$OsPuAKcp4ip.sb2zZUM9vuJwhoRdGdJVcbIlWobbX4XbFPcg8Zjey', 3), --user 3
( 'group3', '$2a$10$OsPuAKcp4ip.sb2zZUM9vuJwhoRdGdJVcbIlWobbX4XbFPcg8Zjey', 3), --user 4
( 'group4', '$2a$10$OsPuAKcp4ip.sb2zZUM9vuJwhoRdGdJVcbIlWobbX4XbFPcg8Zjey', 3), --user 5
( 'group5', '$2a$10$OsPuAKcp4ip.sb2zZUM9vuJwhoRdGdJVcbIlWobbX4XbFPcg8Zjey', 3), --user 6
( 'group6', '$2a$10$OsPuAKcp4ip.sb2zZUM9vuJwhoRdGdJVcbIlWobbX4XbFPcg8Zjey', 3), --user 7
( 'group7', '$2a$10$OsPuAKcp4ip.sb2zZUM9vuJwhoRdGdJVcbIlWobbX4XbFPcg8Zjey', 3), --user 8
( 'group8', '$2a$10$OsPuAKcp4ip.sb2zZUM9vuJwhoRdGdJVcbIlWobbX4XbFPcg8Zjey', 3), --user 9
( 'group9', '$2a$10$OsPuAKcp4ip.sb2zZUM9vuJwhoRdGdJVcbIlWobbX4XbFPcg8Zjey', 3), --user 10
( 'group10', '$2a$10$OsPuAKcp4ip.sb2zZUM9vuJwhoRdGdJVcbIlWobbX4XbFPcg8Zjey', 3), --user 11
( 'provider1', '$2a$10$OsPuAKcp4ip.sb2zZUM9vuJwhoRdGdJVcbIlWobbX4XbFPcg8Zjey', 2),  --user 12
( 'provider2', '$2a$10$OsPuAKcp4ip.sb2zZUM9vuJwhoRdGdJVcbIlWobbX4XbFPcg8Zjey', 2), --user 13
( 'provider3', '$2a$10$OsPuAKcp4ip.sb2zZUM9vuJwhoRdGdJVcbIlWobbX4XbFPcg8Zjey', 2), --user 14
( 'provider4', '$2a$10$OsPuAKcp4ip.sb2zZUM9vuJwhoRdGdJVcbIlWobbX4XbFPcg8Zjey', 2), --user 15
( 'provider5', '$2a$10$OsPuAKcp4ip.sb2zZUM9vuJwhoRdGdJVcbIlWobbX4XbFPcg8Zjey', 2), --user 16
( 'provider6', '$2a$10$OsPuAKcp4ip.sb2zZUM9vuJwhoRdGdJVcbIlWobbX4XbFPcg8Zjey', 2), --user 17
( 'provider7', '$2a$10$OsPuAKcp4ip.sb2zZUM9vuJwhoRdGdJVcbIlWobbX4XbFPcg8Zjey', 2), --user 18
( 'provider8', '$2a$10$OsPuAKcp4ip.sb2zZUM9vuJwhoRdGdJVcbIlWobbX4XbFPcg8Zjey', 2), --user 19
( 'provider9', '$2a$10$OsPuAKcp4ip.sb2zZUM9vuJwhoRdGdJVcbIlWobbX4XbFPcg8Zjey', 2), --user 20
( 'provider10', '$2a$10$OsPuAKcp4ip.sb2zZUM9vuJwhoRdGdJVcbIlWobbX4XbFPcg8Zjey', 2)	 --user 21
;

--  GROUP Dummy Data --
INSERT INTO "group" ( "user_id", "name", "bio", "website", "email", "phone", "street", "city", "state", "zipcode") VALUES 
(2, -- user_id
'Mayo Family Clinic Northwest', 
'Community Pediatric and Adolescent Medicine - Offers primary care services to infants, children and adolescents through college. 
Family Medicine - is available to people of all ages; provides family-oriented comprehensive care, including obstetrical care and well-woman care, newborn and well-child care, pediatrics and adult/geriatric care. 
Community Internal Medicine - serves individuals 18 years of age or older for all aspects of adult health.', -- BIO
'https://communityhealth.mayoclinic.org/locations/northwest-clinic', --website
'MayoFamily@gmail.com', 
'507-538-8555', --phone
'4111 West Frontage Road, Hwy 52 NW', --street
'Rochester',  --city
'MN', --state
'55901'), --zipcode
(3, -- user_id
'Rochester Family Clinic', 
'Rochester Family Clinic - Offers primary care services to infants, children and adolescents through college and is available to people of all ages.', -- BIO
'https://communityhealth.mayoclinic.org/locations/northwest-clinic', 
'RochesterFamilyClinic@gmail.com', 
'507-832-8555', 
'3152 Frontage Road', 
'Rochester', 
'MN', 
'55901');


--  PROVIDER Dummy Data --
INSERT INTO "provider" ( "user_id", "name", "bio", "picture","phone", "email", "availability", "group_id") VALUES
(12, 
'Helayna M. Abraham, M.D.', 
'Community Internal Medicine, Geriatrics and Palliative Care',
 'https://communityhealth.mayoclinic.org/-/media/staff/helaynaabraham30024723.jpg?la=en&hash=203B4CD411907680EC68651CF5E3773B', 
 '507-832-8554', 'Abraham@gmail.com', 
 'M-F, 8am to 5pm', 
 1),
 (13, 
'Katarina Alajbegovic, M.D.', 
'Community Pediatric and Adolescent Medicine',
 'https://communityhealth.mayoclinic.org/-/media/staff/katarinaalajbegovic30082008.jpg?la=en&hash=E579C97A8A67E15BE48386CC0C790719', 
 '507-832-8554', 'Alajbegovic@gmail.com', 
 'M-F, 8am to 5pm', 
 1),
  (14, 
'Aldo A. Acosta Medina, M.D.', 
'Community Internal Medicine, Geriatrics and Palliative Care',
 'https://communityhealth.mayoclinic.org/-/media/staff/aldoacostamedina21318280.jpg?la=en&hash=FF67279A31B6DD84475ED17A985F8BC6', 
 '507-832-8551', 'Medina@gmail.com', 
 'M-F, 8am to 5pm', 
 1),
 (15, 
'Afia B. Adu-Gyamfi, M.D.', 
'Community Pediatric and Adolescent Medicine',
 'https://communityhealth.mayoclinic.org/-/media/staff/alexandraalejos30189266.jpg?la=en&hash=185B6842E486CB59CE0DF799BD7462D2', 
 '507-832-8552', 'Gyamfi@gmail.com', 
 'M-F, 8am to 5pm', 
 1),

  (16, 
'Ryan Alexander, M.D.', 
'Community Internal Medicine, Geriatrics and Palliative Care',
 'https://communityhealth.mayoclinic.org/-/media/staff/afiaadugyamfi30185760.jpg?la=en&hash=747A16D94F256239ED995F10D86C610F', 
 '507-832-8552', 'Gyamfi@gmail.com', 
 'M-F, 8am to 5pm', 
 1),
  (17, 
'Stephanie L. Ahrens, APRN, C.N.P., M.S.N.', 
'Family Medicine',
 'https://communityhealth.mayoclinic.org/-/media/staff/stephanieahrens14604302.jpg?la=en&hash=87BBE98D282DF553890D090B0E93C663', 
 '507-832-8553', 'Ahrens@gmail.com', 
 'M-F, 8am to 5pm', 
 1),
   (18, 
'Asma Ali, M.B.B.S.', 
'Community Pediatric and Adolescent Medicine',
 'https://communityhealth.mayoclinic.org/-/media/staff/asmaali21308675.jpg?la=en&hash=1A2F054DF00651B6DAAC3F5BD8294EF3', 
 '507-832-8553', 'Ali@gmail.com', 
 'M-F, 8am to 5pm', 
 1),
   (19, 
'Mohamad Saleh Alabdaljabar, M.B.B.S.', 
'Community Internal Medicine, Geriatrics and Palliative Care',
 'https://communityhealth.mayoclinic.org/-/media/staff/mohamadsalehalabdaljabar21078394.jpg?la=en&hash=6B4666D72F832F75AF662E8E39105153', 
 '507-832-8553', 'Alabdaljabar@gmail.com', 
 'M-F, 8am to 5pm', 
 1),
   (20, 
'Jay-Sheree P. Allen, M.D.', 
'Family Medicine',
 'https://communityhealth.mayoclinic.org/-/media/staff/jayshereeallen16124308.jpg?la=en&hash=7A39C047BE5B76F365278E5787AC3465', 
 '507-832-8553', 'Allen@gmail.com', 
 'M-F, 8am to 5pm', 
 1),
   (21, 
'Badro (Badra) Ali, M.D.', 
'Family Medicine',
 'https://communityhealth.mayoclinic.org/-/media/staff/badroali30082325.jpg?la=en&hash=39E337E230F43FE63363E6CA51644DF5', 
 '507-832-8543', 'Badra@gmail.com', 
 'M-F, 8am to 5pm', 
 1)
 ;


-- provider_specializations JUNCTION TABLE DUMMY DATA --  
INSERT INTO "provider_specializations" ( "provider_id", "specializations_id") VALUES 
( 1, 1), -- LGBTQ
( 2, 2), -- POC Specific
( 2, 4), 
( 3, 3), -- Disability Specific
( 4, 1), -- LGBTQ
( 4, 2), -- POC Specific
( 4, 3), -- Disability Specific
( 4, 4),
( 5, 5),
( 5, 3),
( 6, 1),
( 6, 6),
( 7, 2),
( 7, 7),
( 8, 9),
( 8, 8),
( 8, 10),
( 9, 4),
( 10, 11),
( 10, 2),
( 10, 6),
( 10, 2)
;


-- provider_specializations JUNCTION TABLE DUMMY DATA --  
INSERT INTO "provider_insurance_plan" ( "provider_id", "insurance_plan_id") VALUES 
( 1, 1), -- Blue Cross and Blue Shield of Minnesota
( 2, 2), -- HealthPartners
( 3, 3), -- Medica of Minnesota
( 4, 1), -- Blue Cross and Blue Shield of Minnesota
( 4, 2), -- HealthPartners
( 4, 3), -- Medica of Minnesota
( 5, 4),
( 5, 6),
( 7, 7),
( 8, 8),
( 9, 9),
( 10, 4),
( 10, 1)
; 


-- provider_service_type JUNCTION TABLE DUMMY DATA --  
INSERT INTO "provider_service_type" ( "provider_id", "service_type_id") VALUES 
( 1, 1), -- Online
( 2, 2), -- InPerson
( 3, 3), -- Over the Phone
( 4, 1), -- Online
( 4, 2), -- InPerson
( 4, 3), -- Over the Phone
( 4, 4),
( 5, 4),
( 5, 5),
( 7, 3),
( 8, 2),
( 9, 1),
( 10, 5),
( 10, 1); -- Inpatient


INSERT INTO "provider_occupation" ( "provider_id", "occupation_id") VALUES 
(1, 1), -- Psychologist
(2, 2), -- Counselor
(3, 3), -- Certified Alcohol and Drug Abuse Counselor
(4, 1), -- Psychologist
(4, 2), -- Counselor
(4, 3), -- Certified Alcohol and Drug Abuse Counselor
(4, 4),
( 5, 4),
( 5, 6),
( 7, 7),
( 8, 8),
( 9, 9),
( 10, 4),
( 10, 1); -- Clinician

--------------------- STOP -- COPY -- & -- PASTE -- HERE ---------------------





----------------------------- DELETE PROVIDER & GROUP ---------------------------------------
---- Code to TEST the different DELETE ----
DELETE FROM "user" WHERE "id" = 13;
DELETE FROM "provider" WHERE "id" = 3;
DELETE FROM "group" WHERE "id" = 3;
--------------------------------------------------------------------------------------- 

--------------------- GET/SELECTS for PROVIDER/GROUP LIST & DROP DOWNS ---------------------

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
---------------------------------------------------------------



 --------------------- PROVIDER/GROUP DETIALS Page(s) ---------------- 
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
---------------------



-----------------------------FILTER/SEARCH VIEWS ---------------------------------------
---------------- SEARCH by ONE thing ---------------- 
-- FILTER/SEARCH  Providers by 1 SPECIALIZATION -- 
SELECT "provider"."id", "provider"."name", "provider"."picture", "provider"."phone", "provider"."email" FROM "provider" 
JOIN "provider_specializations" 
ON "provider"."id" = "provider_specializations"."provider_id"
JOIN "specializations"
ON "specializations"."id" = "provider_specializations"."id"
WHERE "specializations"."specialization" ILIKE '%POC Specific%' 
ORDER BY "provider"."name";

-- FILTER/SEARCH  Providers by 1 OCCUPATION -- 
SELECT "provider"."id", "provider"."name", "provider"."picture", "provider"."phone", "provider"."email" FROM "provider" 
JOIN "provider_occupation" 
ON "provider"."id" = "provider_occupation"."provider_id"
JOIN "occupations"
ON "occupations"."id" = "provider_occupation"."id"
WHERE "occupations"."occupation" ILIKE '%counselor%' 
ORDER BY "provider"."name";

-- FILTER/SEARCH  Providers by 1 SERVICE_TYPE -- 
SELECT "provider"."id", "provider"."name", "provider"."picture", "provider"."phone", "provider"."email", "service_type"."service" FROM "provider" 
JOIN "provider_service_type" 
ON "provider"."id" = "provider_service_type"."provider_id"
JOIN "service_type"
ON "service_type"."id" = "provider_service_type"."id"
WHERE "service_type"."service" ILIKE '%out%' 
ORDER BY "provider"."name";

-- FILTER/SEARCH  Providers by 1 INSURANCE -- 
SELECT "provider"."id", "provider"."name", "provider"."picture", "provider"."phone", "provider"."email" FROM "provider" 
JOIN "provider_insurance_plan" 
ON "provider"."id" = "provider_insurance_plan"."provider_id"
JOIN "insurance_plan"
ON "insurance_plan"."id" = "provider_insurance_plan"."id"
WHERE "insurance_plan"."insurance" ILIKE '%blue%' 
ORDER BY "provider"."name";



---------------- FILTER/SEARCH By MULTIPLE Things using ARRAY_AGG ----------------
--searches multiple filters insurance_plan
SELECT provider.name, array_agg(insurance_plan.insurance) as "accepted insurances" FROM provider
JOIN provider_insurance_plan ON provider_insurance_plan.provider_id = provider.id
JOIN insurance_plan ON insurance_plan.id = provider_insurance_plan.insurance_plan_id
where insurance_plan.insurance ilike '%health%'
or insurance_plan.insurance ilike ''
GROUP BY provider.name
order by provider.name asc;

--searches multiple filters specializations
SELECT provider.name, provider.picture, array_agg(specializations.specialization) as "specialties" FROM provider
JOIN provider_specializations ON provider_specializations.provider_id = provider.id
JOIN specializations ON specializations.id = provider_specializations.specializations_id
group by provider.name, provider.picture
order by provider.name asc;

--search multiple filters specializations
SELECT provider.name, array_agg(specializations.specialization) as "specializations" FROM provider
JOIN provider_specializations ON provider_specializations.provider_id = provider.id
JOIN specializations ON specializations.id = provider_specializations.specializations_id
where specializations.specialization ilike '%l%'
group by provider.name
order by provider.name asc;

--search multiple filters occcupation
SELECT provider.name, array_agg(occupations.occupation) as "Occupation" FROM provider
JOIN provider_occupation ON provider_occupation.provider_id = provider.id
JOIN occupations ON occupations.id = provider_occupation.occupation_id
group by provider.name
order by provider.name asc;
------------------------------------------------------------------------------------------



---------------- FILTER/SEARCH By MULTIPLE Things by NAME----------------
---------------- NO CURRENTLY BEING IMPLEMENTED ----------------
-- FILTER/SEARCH  Providers by MULITPLE Insurance -- (12 posible selections)
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

-- FILTER/SEARCH  Providers by MULITPLE specialization -- (22 posible selections)
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


-- FILTER/SEARCH  Providers by MULITPLE specialization -- (5 posible selections)
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


-- FILTER/SEARCH  Providers by MULITPLE occupation -- (9 posible selections)
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
------------------------------------------------------------------------------------------

--Profile provider get

    SELECT "provider"."id", "user_id", "name", "bio", "picture", "phone", "email", "availability", "access_level" FROM "provider" 
  JOIN "user" ON "provider"."user_id" = "user"."id" WHERE "user_id" = 21;
-----------------------------EDIT/UPDATE VIEWS ONLY---------------------------------------
-- UPDATE - PROVIDER info by "Provider.id"
    UPDATE "provider" SET ("name", "bio", "phone", "email", "availability")  =  ('isaac', 'updated', '55555', 'updated email', 'updatttteeed') WHERE "id" = 13;
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

---------------------------------------------------------------------------------------------

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


--------------------------------------------------------PROFILE VIEWS ONLY---------------------------------------------------------------------

--PROFILE VIEW: insurance by user_id
SELECT insurance_plan.insurance FROM insurance_plan
JOIN provider_insurance_plan ON provider_insurance_plan.insurance_plan_id = insurance_plan.id
JOIN provider ON provider.id = provider_insurance_plan.provider_id
WHERE provider.user_id = 7;

--PROFILE VIEW: occupation by user_id
SELECT occupations.occupation FROM occupations
JOIN provider_occupation ON provider_occupation.occupation_id = occupations.id
JOIN provider ON provider.id = provider_occupation.provider_id
WHERE provider.user_id = 7;

--PROFILE VIEW: specialities by user_id
SELECT specializations.specialization FROM specializations
JOIN provider_specializations ON provider_specializations.specializations_id = specializations.id
JOIN provider ON provider.id = provider_specializations.provider_id
WHERE provider.user_id = 7;

--PROFILE VIEW: services by user_id
SELECT service_type.service FROM service_type
JOIN provider_service_type ON provider_service_type.service_type_id = service_type.id
JOIN provider ON provider.id = provider_service_type.provider_id
WHERE provider.user_id = 7;
-----------------------------------------------------------------------------------------------------------------------------


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

SELECT "provider"."id", "provider"."name", "provider"."picture", "provider"."phone", "provider"."email", "specializations"."specialization"
 FROM "provider" 
JOIN "provider_specializations" 
ON "provider"."id" = "provider_specializations"."provider_id"
JOIN "specializations"
ON "specializations"."id" = "provider_specializations"."specializations_id"
WHERE "specializations"."specialization" ILIKE '%an%' 
ORDER BY "provider"."name";