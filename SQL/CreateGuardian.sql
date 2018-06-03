USE NextCARE
GO

/****** Object:  Table dbo.Guardian ******/
IF OBJECT_ID('dbo.Guardian', 'U') IS NOT NULL
	DROP TABLE dbo.Guardian
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.Guardian(
	GuardianId int IDENTITY(1,1) NOT NULL,
	PersonId int NOT NULL,
	StudentId int NOT NULL,
	GuardianType int NOT NULL
 CONSTRAINT PK_Guardian PRIMARY KEY CLUSTERED 
(
	GuardianId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
