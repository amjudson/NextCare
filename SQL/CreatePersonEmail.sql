USE NextCARE
GO

/****** Object:  Table dbo.PersonEmail    Script Date: 6/3/2018 4:55:48 PM ******/
IF OBJECT_ID('dbo.PersonEmail', 'U') IS NOT NULL
 DROP TABLE dbo.PersonEmail
GO

/****** Object:  Table dbo.PersonEmail    Script Date: 6/3/2018 4:55:48 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.PersonEmail
(
  PersonEmailId int IDENTITY(1,1) NOT NULL,
  PersonId int NOT NULL,
  EmailId int NOT NULL,
  IsPrimary bit NOT NULL,
  CONSTRAINT PK_PersonEmail PRIMARY KEY CLUSTERED
(
	PersonEmailId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

