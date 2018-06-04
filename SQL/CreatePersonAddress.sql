USE NextCARE
GO

/****** Object:  Table dbo.PersonAddress    Script Date: 6/3/2018 4:55:48 PM ******/
 IF OBJECT_ID('dbo.PersonAddress', 'U') IS NOT NULL
 DROP TABLE dbo.PersonAddress
GO

/****** Object:  Table dbo.PersonAddress    Script Date: 6/3/2018 4:55:48 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.PersonAddress(
	PersonAddressId int IDENTITY(1,1) NOT NULL,
	PersonId int NOT NULL,
	AddressId int NOT NULL,
	IsPrimary bit NOT NULL,
 CONSTRAINT PK_PersonAddress PRIMARY KEY CLUSTERED
(
	PersonAddressId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

