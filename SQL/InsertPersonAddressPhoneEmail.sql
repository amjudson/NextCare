USE NextCARE;
GO

DELETE FROM Address;
DBCC CHECKIDENT ('Address', RESEED, 0)

INSERT INTO Address (AddressLine1, AddressLine2, AddressTypeId, City, IsPrimary, StatesId, Zip) VALUES('554 Acher Place', 'Apt 209', 3, 'Ann Arbor', 0, 16, '65478');
INSERT INTO Address (AddressLine1, AddressLine2, AddressTypeId, City, IsPrimary, StatesId, Zip) VALUES('878 Ledgendary Pl', '', 1, 'Destin', 0, 30, '25676');
INSERT INTO Address (AddressLine1, AddressLine2, AddressTypeId, City, IsPrimary, StatesId, Zip) VALUES('333 Vinings Way', '', 4, 'Panima', 0, 38, '89988');
INSERT INTO Address (AddressLine1, AddressLine2, AddressTypeId, City, IsPrimary, StatesId, Zip) VALUES('64923 Creekview Dr', '', 2, 'Big Twon', 0, 8, '89988');
INSERT INTO Address (AddressLine1, AddressLine2, AddressTypeId, City, IsPrimary, StatesId, Zip) VALUES('878 Ledgendary Pl', '', 4, 'Big Town', 1, 7, '65478');
INSERT INTO Address (AddressLine1, AddressLine2, AddressTypeId, City, IsPrimary, StatesId, Zip) VALUES('64923 Creekview Dr', '', 3, 'Big Twon', 1, 7, '25676');
INSERT INTO Address (AddressLine1, AddressLine2, AddressTypeId, City, IsPrimary, StatesId, Zip) VALUES('7654 Extra Long St', '', 2, 'Panima', 1, 38, '32009');
INSERT INTO Address (AddressLine1, AddressLine2, AddressTypeId, City, IsPrimary, StatesId, Zip) VALUES('2034 US Hwy 98', '', 3, 'Trussville', 1, 22, '35778');
INSERT INTO Address (AddressLine1, AddressLine2, AddressTypeId, City, IsPrimary, StatesId, Zip) VALUES('900 Benning Way', '', 2, 'Irondale', 1, 4, '38946');
INSERT INTO Address (AddressLine1, AddressLine2, AddressTypeId, City, IsPrimary, StatesId, Zip) VALUES('7654 Extra Long St', 'Apt 21', 4, 'Big Twon', 1, 14, '38946');
INSERT INTO Address (AddressLine1, AddressLine2, AddressTypeId, City, IsPrimary, StatesId, Zip) VALUES('A12 Tudder Lane', '', 2, 'Trussville', 1, 29, '89988');
INSERT INTO Address (AddressLine1, AddressLine2, AddressTypeId, City, IsPrimary, StatesId, Zip) VALUES('333 Vinings Way', '', 4, 'Destin', 1, 21, '72861');
INSERT INTO Address (AddressLine1, AddressLine2, AddressTypeId, City, IsPrimary, StatesId, Zip) VALUES('234 Wearing Dr', '', 2, 'Destin', 1, 36, '97662');
INSERT INTO Address (AddressLine1, AddressLine2, AddressTypeId, City, IsPrimary, StatesId, Zip) VALUES('234 Wearing Dr', '', 1, 'Trussville', 1, 16, '35778');
INSERT INTO Address (AddressLine1, AddressLine2, AddressTypeId, City, IsPrimary, StatesId, Zip) VALUES('12345 Collin Lane', 'Suite 299', 3, 'Sizzle', 1, 21, '72861');
INSERT INTO Address (AddressLine1, AddressLine2, AddressTypeId, City, IsPrimary, StatesId, Zip) VALUES('878 Ledgendary Pl', '', 2, 'Panima', 1, 30, '74562');
INSERT INTO Address (AddressLine1, AddressLine2, AddressTypeId, City, IsPrimary, StatesId, Zip) VALUES('878 Ledgendary Pl', '', 3, 'Oakaloosa', 0, 32, '35778');
INSERT INTO Address (AddressLine1, AddressLine2, AddressTypeId, City, IsPrimary, StatesId, Zip) VALUES('2034 US Hwy 98', '', 1, 'Panima', 1, 39, '43256');
INSERT INTO Address (AddressLine1, AddressLine2, AddressTypeId, City, IsPrimary, StatesId, Zip) VALUES('123 Main St', '', 2, 'Birmingham', 1, 18, '43256');
INSERT INTO Address (AddressLine1, AddressLine2, AddressTypeId, City, IsPrimary, StatesId, Zip) VALUES('7654 Extra Long St', 'Bldg 2, Apt 21', 2, 'Birmingham', 1, 6, '35778');
INSERT INTO Address (AddressLine1, AddressLine2, AddressTypeId, City, IsPrimary, StatesId, Zip) VALUES('77 Parker st', '', 3, 'Panima', 1, 33, '89988');
INSERT INTO Address (AddressLine1, AddressLine2, AddressTypeId, City, IsPrimary, StatesId, Zip) VALUES('234 Wearing Dr', 'Apt 1A', 3, 'Big Twon', 1, 45, '72861');
INSERT INTO Address (AddressLine1, AddressLine2, AddressTypeId, City, IsPrimary, StatesId, Zip) VALUES('123 Main St', '', 4, 'Fort Walton', 0, 41, '35442');
INSERT INTO Address (AddressLine1, AddressLine2, AddressTypeId, City, IsPrimary, StatesId, Zip) VALUES('A12 Tudder Lane', '', 1, 'Fort Walton', 1, 39, '35778');
INSERT INTO Address (AddressLine1, AddressLine2, AddressTypeId, City, IsPrimary, StatesId, Zip) VALUES('A12 Tudder Lane', '', 3, 'Sizzle', 0, 16, '25676');
INSERT INTO Address (AddressLine1, AddressLine2, AddressTypeId, City, IsPrimary, StatesId, Zip) VALUES('333 Vinings Way', '', 1, 'Sizzle', 1, 45, '32009');
INSERT INTO Address (AddressLine1, AddressLine2, AddressTypeId, City, IsPrimary, StatesId, Zip) VALUES('7654 Extra Long St', '', 2, 'Trussville', 0, 8, '72861');
INSERT INTO Address (AddressLine1, AddressLine2, AddressTypeId, City, IsPrimary, StatesId, Zip) VALUES('12345 Collin Lane', '', 4, 'Peters', 0, 42, '74562');
INSERT INTO Address (AddressLine1, AddressLine2, AddressTypeId, City, IsPrimary, StatesId, Zip) VALUES('A12 Tudder Lane', 'Apt 1A', 4, 'Destin', 1, 15, '88887');
INSERT INTO Address (AddressLine1, AddressLine2, AddressTypeId, City, IsPrimary, StatesId, Zip) VALUES('554 Acher Place', '', 3, 'Fort Walton', 1, 28, '38946');

DELETE FROM Person;
DBCC CHECKIDENT ('Person', RESEED, 0)

INSERT INTO Person (Alias, DateOfBirth, FirstName, LastName, MiddleName, PersonTypeId, Prefix, RaceId, Sex, SocialSecurityNumber, SSNSalt, Suffix) VALUES('Joe', '11/10/2001 7:46:00 AM', 'Mark', 'Bradshaw', 'E', 6, '', 3, 'M', '456128463', '', '');
INSERT INTO Person (Alias, DateOfBirth, FirstName, LastName, MiddleName, PersonTypeId, Prefix, RaceId, Sex, SocialSecurityNumber, SSNSalt, Suffix) VALUES('Jim', '4/5/1986 7:46:00 AM', 'Corey', 'Noyce', 'N', 5, '', 2, 'F', '467829908', '', '');
INSERT INTO Person (Alias, DateOfBirth, FirstName, LastName, MiddleName, PersonTypeId, Prefix, RaceId, Sex, SocialSecurityNumber, SSNSalt, Suffix) VALUES('', '11/17/2008 7:46:00 AM', 'Eric', 'Chen', 'A', 7, '', 1, 'F', '328228493', '', '');
INSERT INTO Person (Alias, DateOfBirth, FirstName, LastName, MiddleName, PersonTypeId, Prefix, RaceId, Sex, SocialSecurityNumber, SSNSalt, Suffix) VALUES('Jimmy', '12/20/2013 7:46:00 AM', 'Steve', 'Johnson', 'J', 6, '', 4, 'F', '783779283', '', '');
INSERT INTO Person (Alias, DateOfBirth, FirstName, LastName, MiddleName, PersonTypeId, Prefix, RaceId, Sex, SocialSecurityNumber, SSNSalt, Suffix) VALUES('BillyBob', '1/20/1976 7:46:00 AM', 'Bob', 'Williamson', 'F', 2, '', 5, 'M', '633129870', '', '');
INSERT INTO Person (Alias, DateOfBirth, FirstName, LastName, MiddleName, PersonTypeId, Prefix, RaceId, Sex, SocialSecurityNumber, SSNSalt, Suffix) VALUES('Jimmy', '1/15/1991 7:46:00 AM', 'Theresa', 'Serevich', 'F', 4, '', 3, 'M', '456128463', '', '');
INSERT INTO Person (Alias, DateOfBirth, FirstName, LastName, MiddleName, PersonTypeId, Prefix, RaceId, Sex, SocialSecurityNumber, SSNSalt, Suffix) VALUES('', '10/9/1985 7:46:00 AM', 'Kelley', 'Johnson', 'A', 2, '', 3, 'M', '328228493', '', '');
INSERT INTO Person (Alias, DateOfBirth, FirstName, LastName, MiddleName, PersonTypeId, Prefix, RaceId, Sex, SocialSecurityNumber, SSNSalt, Suffix) VALUES('', '3/28/2005 7:46:00 AM', 'Steve', 'Weeks', 'S', 3, '', 5, 'F', '456128463', '', '');
INSERT INTO Person (Alias, DateOfBirth, FirstName, LastName, MiddleName, PersonTypeId, Prefix, RaceId, Sex, SocialSecurityNumber, SSNSalt, Suffix) VALUES('', '3/18/1983 7:46:00 AM', 'Steve', 'Bradshaw', 'E', 5, '', 1, 'F', '467829908', '', '');
INSERT INTO Person (Alias, DateOfBirth, FirstName, LastName, MiddleName, PersonTypeId, Prefix, RaceId, Sex, SocialSecurityNumber, SSNSalt, Suffix) VALUES('Joe', '6/13/2014 7:46:00 AM', 'Eric', 'Peterson', 'S', 3, '', 3, 'F', '234876789', '', '');
INSERT INTO Person (Alias, DateOfBirth, FirstName, LastName, MiddleName, PersonTypeId, Prefix, RaceId, Sex, SocialSecurityNumber, SSNSalt, Suffix) VALUES('Liz', '12/9/2004 7:46:00 AM', 'Paul', 'Bradshaw', 'X', 2, '', 2, 'F', '234876789', '', '');
INSERT INTO Person (Alias, DateOfBirth, FirstName, LastName, MiddleName, PersonTypeId, Prefix, RaceId, Sex, SocialSecurityNumber, SSNSalt, Suffix) VALUES('', '1/1/1987 7:46:00 AM', 'Matthew', 'Garcia', 'N', 3, '', 1, 'F', '234876789', '', '');
INSERT INTO Person (Alias, DateOfBirth, FirstName, LastName, MiddleName, PersonTypeId, Prefix, RaceId, Sex, SocialSecurityNumber, SSNSalt, Suffix) VALUES('Capp', '10/22/1985 7:46:00 AM', 'Rita', 'Almound', 'J', 2, '', 4, 'F', '467829908', '', '');
INSERT INTO Person (Alias, DateOfBirth, FirstName, LastName, MiddleName, PersonTypeId, Prefix, RaceId, Sex, SocialSecurityNumber, SSNSalt, Suffix) VALUES('', '4/27/1997 7:46:00 AM', 'Steve', 'Johnson', 'W', 4, '', 4, 'F', '783779283', '', '');
INSERT INTO Person (Alias, DateOfBirth, FirstName, LastName, MiddleName, PersonTypeId, Prefix, RaceId, Sex, SocialSecurityNumber, SSNSalt, Suffix) VALUES('Jimmy', '6/13/1991 7:46:00 AM', 'Matthew', 'Harmon', 'J', 4, '', 2, 'F', '644563958', '', '');
INSERT INTO Person (Alias, DateOfBirth, FirstName, LastName, MiddleName, PersonTypeId, Prefix, RaceId, Sex, SocialSecurityNumber, SSNSalt, Suffix) VALUES('Stan', '1/17/2010 7:46:00 AM', 'Steve', 'Bradshaw', 'A', 4, '', 2, 'F', '633129870', '', '');
INSERT INTO Person (Alias, DateOfBirth, FirstName, LastName, MiddleName, PersonTypeId, Prefix, RaceId, Sex, SocialSecurityNumber, SSNSalt, Suffix) VALUES('Liz', '12/20/1984 7:46:00 AM', 'Steve', 'Noyce', 'D', 2, '', 4, 'M', '456128463', '', '');
INSERT INTO Person (Alias, DateOfBirth, FirstName, LastName, MiddleName, PersonTypeId, Prefix, RaceId, Sex, SocialSecurityNumber, SSNSalt, Suffix) VALUES('Timmy', '12/16/2008 7:46:00 AM', 'Steve', 'Richardson', 'C', 7, '', 1, 'F', '644563958', '', '');
INSERT INTO Person (Alias, DateOfBirth, FirstName, LastName, MiddleName, PersonTypeId, Prefix, RaceId, Sex, SocialSecurityNumber, SSNSalt, Suffix) VALUES('Beth', '2/7/2015 7:46:00 AM', 'Rita', 'Noyce', 'Q', 2, '', 3, 'M', '467829908', '', '');
INSERT INTO Person (Alias, DateOfBirth, FirstName, LastName, MiddleName, PersonTypeId, Prefix, RaceId, Sex, SocialSecurityNumber, SSNSalt, Suffix) VALUES('Stan', '2/11/1988 7:46:00 AM', 'Steve', 'Richardson', 'S', 5, '', 1, 'M', '564285902', '', '');
INSERT INTO Person (Alias, DateOfBirth, FirstName, LastName, MiddleName, PersonTypeId, Prefix, RaceId, Sex, SocialSecurityNumber, SSNSalt, Suffix) VALUES('', '8/3/1993 7:46:00 AM', 'Paul', 'Williamson', 'J', 1, '', 1, 'M', '633129870', '', '');
INSERT INTO Person (Alias, DateOfBirth, FirstName, LastName, MiddleName, PersonTypeId, Prefix, RaceId, Sex, SocialSecurityNumber, SSNSalt, Suffix) VALUES('', '1/21/1983 7:46:00 AM', 'Mary', 'Peterson', 'Q', 2, '', 4, 'F', '783779283', '', '');
INSERT INTO Person (Alias, DateOfBirth, FirstName, LastName, MiddleName, PersonTypeId, Prefix, RaceId, Sex, SocialSecurityNumber, SSNSalt, Suffix) VALUES('Jim', '4/12/1975 7:46:00 AM', 'Matthew', 'Peterson', 'X', 5, '', 1, 'F', '456128463', '', '');
INSERT INTO Person (Alias, DateOfBirth, FirstName, LastName, MiddleName, PersonTypeId, Prefix, RaceId, Sex, SocialSecurityNumber, SSNSalt, Suffix) VALUES('Joe', '1/17/2010 7:46:00 AM', 'Theresa', 'Chen', 'A', 4, '', 3, 'F', '467829908', '', '');
INSERT INTO Person (Alias, DateOfBirth, FirstName, LastName, MiddleName, PersonTypeId, Prefix, RaceId, Sex, SocialSecurityNumber, SSNSalt, Suffix) VALUES('', '11/29/1979 7:46:00 AM', 'Bob', 'Almound', 'A', 3, '', 5, 'F', '783779283', '', '');
INSERT INTO Person (Alias, DateOfBirth, FirstName, LastName, MiddleName, PersonTypeId, Prefix, RaceId, Sex, SocialSecurityNumber, SSNSalt, Suffix) VALUES('', '6/4/1978 7:46:00 AM', 'Steve', 'Williamson', 'Q', 1, '', 4, 'F', '783779283', '', '');
INSERT INTO Person (Alias, DateOfBirth, FirstName, LastName, MiddleName, PersonTypeId, Prefix, RaceId, Sex, SocialSecurityNumber, SSNSalt, Suffix) VALUES('BillyBob', '3/27/1996 7:46:00 AM', 'Steve', 'Johnson', 'A', 4, '', 3, 'M', '564285902', '', '');
INSERT INTO Person (Alias, DateOfBirth, FirstName, LastName, MiddleName, PersonTypeId, Prefix, RaceId, Sex, SocialSecurityNumber, SSNSalt, Suffix) VALUES('', '6/18/2006 7:46:00 AM', 'Steve', 'Peterson', 'J', 1, '', 3, 'M', '456128463', '', '');
INSERT INTO Person (Alias, DateOfBirth, FirstName, LastName, MiddleName, PersonTypeId, Prefix, RaceId, Sex, SocialSecurityNumber, SSNSalt, Suffix) VALUES('', '10/29/1985 7:46:00 AM', 'Paul', 'Chen', 'Q', 1, '', 2, 'F', '234876789', '', '');
INSERT INTO Person (Alias, DateOfBirth, FirstName, LastName, MiddleName, PersonTypeId, Prefix, RaceId, Sex, SocialSecurityNumber, SSNSalt, Suffix) VALUES('', '3/19/1985 7:46:00 AM', 'Steve', 'Almound', 'C', 5, '', 3, 'F', '328228493', '', '');

DELETE FROM Email;
DBCC CHECKIDENT ('Email', RESEED, 0)

INSERT INTO Email (EmailAddress, EmailTypeId, IsPrimary) VALUES('eight.seven@outlook.com', 3, 1);
INSERT INTO Email (EmailAddress, EmailTypeId, IsPrimary) VALUES('two.seven@yahoo.com', 4, 0);
INSERT INTO Email (EmailAddress, EmailTypeId, IsPrimary) VALUES('seven.nine@gmail.com', 1, 0);
INSERT INTO Email (EmailAddress, EmailTypeId, IsPrimary) VALUES('two.ten@outlook.com', 1, 1);
INSERT INTO Email (EmailAddress, EmailTypeId, IsPrimary) VALUES('two.three@burgers.com', 4, 1);
INSERT INTO Email (EmailAddress, EmailTypeId, IsPrimary) VALUES('two.ten@outlook.com', 3, 1);
INSERT INTO Email (EmailAddress, EmailTypeId, IsPrimary) VALUES('seven.three@burgers.com', 3, 0);
INSERT INTO Email (EmailAddress, EmailTypeId, IsPrimary) VALUES('seven.nine@gmail.com', 4, 1);
INSERT INTO Email (EmailAddress, EmailTypeId, IsPrimary) VALUES('seven.nine@gmail.com', 1, 1);
INSERT INTO Email (EmailAddress, EmailTypeId, IsPrimary) VALUES('two.ten@outlook.com', 2, 1);
INSERT INTO Email (EmailAddress, EmailTypeId, IsPrimary) VALUES('seven.three@burgers.com', 4, 0);
INSERT INTO Email (EmailAddress, EmailTypeId, IsPrimary) VALUES('eight.ten@outlook.com', 1, 1);
INSERT INTO Email (EmailAddress, EmailTypeId, IsPrimary) VALUES('seven.three@burgers.com', 1, 1);
INSERT INTO Email (EmailAddress, EmailTypeId, IsPrimary) VALUES('nine.liz@gmail.com', 3, 0);
INSERT INTO Email (EmailAddress, EmailTypeId, IsPrimary) VALUES('two.ten@outlook.com', 2, 1);
INSERT INTO Email (EmailAddress, EmailTypeId, IsPrimary) VALUES('nine.ten@gmail.com', 3, 1);
INSERT INTO Email (EmailAddress, EmailTypeId, IsPrimary) VALUES('seven.nine@gmail.com', 1, 1);
INSERT INTO Email (EmailAddress, EmailTypeId, IsPrimary) VALUES('seven.three@burgers.com', 3, 1);
INSERT INTO Email (EmailAddress, EmailTypeId, IsPrimary) VALUES('nine.three@mail.mine.com', 4, 1);
INSERT INTO Email (EmailAddress, EmailTypeId, IsPrimary) VALUES('seven.three@burgers.com', 1, 0);
INSERT INTO Email (EmailAddress, EmailTypeId, IsPrimary) VALUES('one.two@yahoo.com', 4, 1);
INSERT INTO Email (EmailAddress, EmailTypeId, IsPrimary) VALUES('nine.liz@gmail.com', 2, 1);
INSERT INTO Email (EmailAddress, EmailTypeId, IsPrimary) VALUES('two.ten@outlook.com', 3, 1);
INSERT INTO Email (EmailAddress, EmailTypeId, IsPrimary) VALUES('two.ten@outlook.com', 3, 1);
INSERT INTO Email (EmailAddress, EmailTypeId, IsPrimary) VALUES('nine.three@mail.mine.com', 4, 1);
INSERT INTO Email (EmailAddress, EmailTypeId, IsPrimary) VALUES('nine.three@mail.mine.com', 2, 1);
INSERT INTO Email (EmailAddress, EmailTypeId, IsPrimary) VALUES('nine.liz@gmail.com', 4, 1);
INSERT INTO Email (EmailAddress, EmailTypeId, IsPrimary) VALUES('two.seven@yahoo.com', 1, 0);
INSERT INTO Email (EmailAddress, EmailTypeId, IsPrimary) VALUES('seven.three@burgers.com', 2, 0);
INSERT INTO Email (EmailAddress, EmailTypeId, IsPrimary) VALUES('eight.seven@yahoo.com', 1, 1);

DELETE FROM Phone;
DBCC CHECKIDENT ('Phone', RESEED, 0)

INSERT INTO Phone (Extension, IsPrimary, PhoneNumber, PhoneTypeId) VALUES('2345', 1, '7748762987', 4);
INSERT INTO Phone (Extension, IsPrimary, PhoneNumber, PhoneTypeId) VALUES('', 1, '7748762987', 2);
INSERT INTO Phone (Extension, IsPrimary, PhoneNumber, PhoneTypeId) VALUES('2345', 1, '3247896543', 2);
INSERT INTO Phone (Extension, IsPrimary, PhoneNumber, PhoneTypeId) VALUES('2345', 1, '2058889876', 3);
INSERT INTO Phone (Extension, IsPrimary, PhoneNumber, PhoneTypeId) VALUES('4567', 1, '3458762756', 4);
INSERT INTO Phone (Extension, IsPrimary, PhoneNumber, PhoneTypeId) VALUES('123', 1, '8505557654', 3);
INSERT INTO Phone (Extension, IsPrimary, PhoneNumber, PhoneTypeId) VALUES('4567', 0, '3458762756', 3);
INSERT INTO Phone (Extension, IsPrimary, PhoneNumber, PhoneTypeId) VALUES('9876', 1, '7168784720', 2);
INSERT INTO Phone (Extension, IsPrimary, PhoneNumber, PhoneTypeId) VALUES('2345', 1, '7168784720', 1);
INSERT INTO Phone (Extension, IsPrimary, PhoneNumber, PhoneTypeId) VALUES('7398', 1, '7452229999', 2);
INSERT INTO Phone (Extension, IsPrimary, PhoneNumber, PhoneTypeId) VALUES('2345', 0, '7168784720', 2);
INSERT INTO Phone (Extension, IsPrimary, PhoneNumber, PhoneTypeId) VALUES('', 1, '7452229999', 2);
INSERT INTO Phone (Extension, IsPrimary, PhoneNumber, PhoneTypeId) VALUES('2345', 0, '6719998765', 2);
INSERT INTO Phone (Extension, IsPrimary, PhoneNumber, PhoneTypeId) VALUES('2345', 1, '7748762987', 4);
INSERT INTO Phone (Extension, IsPrimary, PhoneNumber, PhoneTypeId) VALUES('', 1, '3247896543', 2);
INSERT INTO Phone (Extension, IsPrimary, PhoneNumber, PhoneTypeId) VALUES('', 1, '2058889876', 2);
INSERT INTO Phone (Extension, IsPrimary, PhoneNumber, PhoneTypeId) VALUES('', 1, '7168784720', 3);
INSERT INTO Phone (Extension, IsPrimary, PhoneNumber, PhoneTypeId) VALUES('2345', 1, '3458762756', 3);
INSERT INTO Phone (Extension, IsPrimary, PhoneNumber, PhoneTypeId) VALUES('', 1, '6719998765', 2);
INSERT INTO Phone (Extension, IsPrimary, PhoneNumber, PhoneTypeId) VALUES('7398', 0, '2058889876', 3);
INSERT INTO Phone (Extension, IsPrimary, PhoneNumber, PhoneTypeId) VALUES('9000', 0, '7748762987', 2);
INSERT INTO Phone (Extension, IsPrimary, PhoneNumber, PhoneTypeId) VALUES('2345', 1, '7168784720', 4);
INSERT INTO Phone (Extension, IsPrimary, PhoneNumber, PhoneTypeId) VALUES('2345', 0, '3458762756', 4);
INSERT INTO Phone (Extension, IsPrimary, PhoneNumber, PhoneTypeId) VALUES('2345', 1, '7452229999', 3);
INSERT INTO Phone (Extension, IsPrimary, PhoneNumber, PhoneTypeId) VALUES('', 1, '8506671212', 3);
INSERT INTO Phone (Extension, IsPrimary, PhoneNumber, PhoneTypeId) VALUES('2345', 1, '3458762756', 1);
INSERT INTO Phone (Extension, IsPrimary, PhoneNumber, PhoneTypeId) VALUES('9000', 0, '7748762987', 1);
INSERT INTO Phone (Extension, IsPrimary, PhoneNumber, PhoneTypeId) VALUES('2345', 0, '2058889876', 1);
INSERT INTO Phone (Extension, IsPrimary, PhoneNumber, PhoneTypeId) VALUES('2345', 1, '2247638224', 1);
INSERT INTO Phone (Extension, IsPrimary, PhoneNumber, PhoneTypeId) VALUES('', 0, '7748762987', 4);
