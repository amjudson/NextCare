USE NextCARE
GO

/****** Object:  Table dbo.StudentEmergencyContact    Script Date: 6/3/2018 2:35:06 PM ******/
IF OBJECT_ID('dbo.StudentEmergencyContact', 'U') IS NOT NULL
	DROP TABLE dbo.StudentEmergencyContact
GO

/****** Object:  Table dbo.StudentEmergencyContact    Script Date: 6/3/2018 2:35:06 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.StudentEmergencyContact(
	StudentEmergencyContactId int IDENTITY(1,1) NOT NULL,
	StudentId int NOT NULL,
	EmergencyContactId int NOT NULL,
	IsPrimary bit NOT NULL,
 CONSTRAINT PK_StudentEmergencyContact PRIMARY KEY CLUSTERED 
(
	StudentEmergencyContactId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

