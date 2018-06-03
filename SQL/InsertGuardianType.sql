USE NextCARE;
GO

TRUNCATE TABLE dbo.GuardianType;

SET IDENTITY_INSERT GuardianType ON;
INSERT INTO GuardianType (GuardianTypeId, Description)
VALUES(1, 'Parent');
INSERT INTO GuardianType (GuardianTypeId, Description)
VALUES(2, 'Guardian');
INSERT INTO GuardianType (GuardianTypeId, Description)
VALUES(3, 'Relitive');
