USE NextCare;
GO

DELETE FROM Student;
DBCC CHECKIDENT ('Student', RESEED, 0)

INSERT INTO Student (Alias, GradeLevelId, PersonId, PhysicianId, StudentTypeId) VALUES('', 1, 13, 8, 1);
INSERT INTO Student (Alias, GradeLevelId, PersonId, PhysicianId, StudentTypeId) VALUES('', 4, 7, 25, 4);
INSERT INTO Student (Alias, GradeLevelId, PersonId, PhysicianId, StudentTypeId) VALUES('', 2, 7, 28, 1);
INSERT INTO Student (Alias, GradeLevelId, PersonId, PhysicianId, StudentTypeId) VALUES('', 4, 9, 9, 1);
INSERT INTO Student (Alias, GradeLevelId, PersonId, PhysicianId, StudentTypeId) VALUES('', 3, 3, 30, 1);
INSERT INTO Student (Alias, GradeLevelId, PersonId, PhysicianId, StudentTypeId) VALUES('', 4, 10, 19, 4);
INSERT INTO Student (Alias, GradeLevelId, PersonId, PhysicianId, StudentTypeId) VALUES('', 3, 13, 2, 2);
INSERT INTO Student (Alias, GradeLevelId, PersonId, PhysicianId, StudentTypeId) VALUES('', 1, 12, 15, 4);
INSERT INTO Student (Alias, GradeLevelId, PersonId, PhysicianId, StudentTypeId) VALUES('', 2, 12, 26, 1);
INSERT INTO Student (Alias, GradeLevelId, PersonId, PhysicianId, StudentTypeId) VALUES('', 1, 12, 10, 1);
INSERT INTO Student (Alias, GradeLevelId, PersonId, PhysicianId, StudentTypeId) VALUES('', 2, 9, 15, 4);
INSERT INTO Student (Alias, GradeLevelId, PersonId, PhysicianId, StudentTypeId) VALUES('', 4, 7, 16, 2);
