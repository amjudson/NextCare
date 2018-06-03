USE NextCARE;
GO

TRUNCATE TABLE dbo.EmailType;

SET IDENTITY_INSERT EmailType ON;
insert into EmailType	(EmailTypeId, DESCRIPTION)
values(1, 'Home');
insert into EmailType	(EmailTypeId, DESCRIPTION)
values(2, 'Work');
insert into EmailType	(EmailTypeId, DESCRIPTION)
values(4, 'Other');
