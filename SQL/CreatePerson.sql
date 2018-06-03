USE NextCARE
GO

/****** Object:  Table dbo.Person    Script Date: 5/29/2018 6:54:36 PM ******/
IF OBJECT_ID('dbo.Person', 'U') IS NOT NULL
	DROP TABLE dbo.Person
GO

/****** Object:  Table dbo.Person    Script Date: 5/29/2018 6:54:36 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.Person(
	PersonId int IDENTITY(1,1) NOT NULL,
	LastName nvarchar(50) NOT NULL,
	FirstName nvarchar(50) NOT NULL,
	MiddleName nvarchar(50) NULL,
	Suffix nvarchar(10) NULL,
	Prefix nvarchar(10) NULL,
	PersonTypeId int NOT NULL,
	SocialSecurityNumber nvarchar(255) NULL,
	SSNSalt nvarchar(50) NULL,
	Sex nchar(1) NOT NULL,
	Alias nvarchar(50) NOT NULL,
	RaceId int NOT NULL,
	DateOfBirth date NOT NULL,
 CONSTRAINT PK_Person PRIMARY KEY CLUSTERED
(
	PersonId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

