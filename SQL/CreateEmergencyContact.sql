USE NextCARE
GO

/****** Object:  Table dbo.EmergencyContact    Script Date: 6/1/2018 8:39:10 AM ******/
IF OBJECT_ID('dbo.EmergencyContact', 'U') IS NOT NULL
	DROP TABLE dbo.EmergencyContact
GO

/****** Object:  Table dbo.EmergencyContact    Script Date: 6/1/2018 8:39:10 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.EmergencyContact(
	EmergencyContactId int IDENTITY(1,1) NOT NULL,
	StudentId int NOT NULL,
	PersonId int NOT NULL,
	IsPrimary bit NOT NULL,
 CONSTRAINT PK_EmergencyContact PRIMARY KEY CLUSTERED 
(
	EmergencyContactId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
