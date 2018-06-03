USE NextCARE
GO

/****** Object:  Table dbo.PersonPhone    Script Date: 6/3/2018 4:55:48 PM ******/
 IF OBJECT_ID('dbo.PersonPhone', 'U') IS NOT NULL
 DROP TABLE dbo.PersonPhone
GO

/****** Object:  Table dbo.PersonPhone    Script Date: 6/3/2018 4:55:48 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.PersonPhone(
	PersonPhoneId int IDENTITY(1,1) NOT NULL,
	PersonId int NOT NULL,
	PhoneId int NOT NULL,
	IsPrimary bit NOT NULL,
 CONSTRAINT PK_PersonPhone PRIMARY KEY CLUSTERED
(
	PersonPhoneId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

