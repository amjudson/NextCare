USE NextCARE;
GO

DELETE FROM dbo.Race;

SET IDENTITY_INSERT Race ON;
insert into Race	(RaceId, Description)
values(1, 'White');
insert into Race	(RaceId, Description)
values(2, 'Black');
insert into Race	(RaceId, Description)
values(3, 'Asian');
insert into Race	(RaceId, Description)
values(4, 'Native Hawaiian');
insert into Race	(RaceId, Description)
values(5, 'American Indian');
insert into Race	(RaceId, Description)
values(6, 'Other');
