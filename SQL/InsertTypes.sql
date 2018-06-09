USE NextCAREBase;
GO

BEGIN TRAN
SET IDENTITY_INSERT dbo.AddressType ON;
insert into AddressType	(AddressTypeId, Description) values(1, 'Home');
insert into AddressType	(AddressTypeId, Description) values(2, 'Work');
insert into AddressType	(AddressTypeId, Description) values(3, 'Vacation');
insert into AddressType	(AddressTypeId, Description) values(4, 'Other');

SET IDENTITY_INSERT EmailType ON;
insert into EmailType (EmailTypeId, Description) values(1, 'Home');
insert into EmailType (EmailTypeId, Description) values(2, 'Work');
insert into EmailType (EmailTypeId, Description) values(3, 'Junk');
insert into EmailType (EmailTypeId, Description) values(4, 'Other');

SET IDENTITY_INSERT GuardianType ON;
INSERT INTO GuardianType (GuardianTypeId, Description) VALUES(1, 'Parent');
INSERT INTO GuardianType (GuardianTypeId, Description) VALUES(2, 'Guardian');
INSERT INTO GuardianType (GuardianTypeId, Description) VALUES(3, 'Relative');
INSERT INTO GuardianType (GuardianTypeId, Description) VALUES(4, 'Mother');
INSERT INTO GuardianType (GuardianTypeId, Description) VALUES(5, 'Father');
INSERT INTO GuardianType (GuardianTypeId, Description) VALUES(6, 'Bother');
INSERT INTO GuardianType (GuardianTypeId, Description) VALUES(7, 'Sister');

SET IDENTITY_INSERT PersonType ON;
insert into PersonType	(PersonTypeId, Description) values(1, 'Student');
insert into PersonType	(PersonTypeId, Description) values(2, 'Parent');
insert into PersonType	(PersonTypeId, Description) values(3, 'Guardian');
insert into PersonType	(PersonTypeId, Description) values(4, 'Mother');
insert into PersonType	(PersonTypeId, Description) values(5, 'Father');
insert into PersonType	(PersonTypeId, Description) values(6, 'Sibling');
insert into PersonType	(PersonTypeId, Description) values(7, 'Brother');
insert into PersonType	(PersonTypeId, Description) values(8, 'Sister');

SET IDENTITY_INSERT PhoneType ON;
INSERT INTO PhoneType	(PhoneTypeId, Description) VALUES(1, 'Cell');
INSERT INTO PhoneType	(PhoneTypeId, Description) VALUES(2, 'Work');
INSERT INTO PhoneType	(PhoneTypeId, Description) VALUES(3, 'Home');
INSERT INTO PhoneType	(PhoneTypeId, Description) VALUES(4, 'Other');

SET IDENTITY_INSERT Race ON;
INSERT INTO Race	(RaceId, Description) VALUES(1, 'White');
INSERT INTO Race	(RaceId, Description) VALUES(2, 'Black');
INSERT INTO Race	(RaceId, Description) VALUES(3, 'Asian');
INSERT INTO Race	(RaceId, Description) VALUES(4, 'Native Hawaiian');
INSERT INTO Race	(RaceId, Description) VALUES(5, 'American Indian');
INSERT INTO Race	(RaceId, Description) VALUES(6, 'Other');

SET IDENTITY_INSERT StudentType ON;
INSERT INTO StudentType (StudentTypeId, Description) VALUES(1, 'Toddler');
INSERT INTO StudentType (StudentTypeId, Description) VALUES(2, 'Kindegarden');
INSERT INTO StudentType (StudentTypeId, Description) VALUES(3, 'Grade School');
INSERT INTO StudentType (StudentTypeId, Description) VALUES(4, 'Old');
ROLLBACK TRAN