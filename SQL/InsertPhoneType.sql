USE NextCARE;
GO

TRUNCATE TABLE dbo.PhoneType;

SET IDENTITY_INSERT PhoneType ON;
insert into PhoneType	(PhoneTypeId, DESCRIPTION)
values(1, 'Cell');
insert into PhoneType	(PhoneTypeId, DESCRIPTION)
values(2, 'Work');
insert into PhoneType	(PhoneTypeId, DESCRIPTION)
values(3, 'Home');
insert into PhoneType	(PhoneTypeId, DESCRIPTION)
values(4, 'Other');
