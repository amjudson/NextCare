USE NextCARE
GO

/****** Object:  Table dbo.GuardianType    Script Date: 6/1/2018 8:46:06 AM ******/
IF OBJECT_ID('dbo.GuardianType', 'U') IS NOT NULL
	DROP TABLE dbo.GuardianType
	GO

/****** Object:  Table dbo.GuardianType    Script Date: 6/1/2018 8:46:06 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.GuardianType(
	GuardianTypeId int IDENTITY(1,1) NOT NULL,
	Description varchar(50) NOT NULL,
 CONSTRAINT PK_GuardianType PRIMARY KEY CLUSTERED 
(
	GuardianTypeId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

