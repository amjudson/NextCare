USE NextCARE
GO

/****** Object:  Table dbo.Insurance    Script Date: 6/1/2018 8:39:27 AM ******/
IF OBJECT_ID('dbo.Insurance', 'U') IS NOT NULL
	DROP TABLE dbo.Insurance
	GO

/****** Object:  Table dbo.Insurance    Script Date: 6/1/2018 8:39:27 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.Insurance(
	InsuranceId int IDENTITY(1,1) NOT NULL,
	CompanyName nvarchar(512) NOT NULL,
	PolicyNumber nvarchar(50) NOT NULL,
 CONSTRAINT PK_Insurance PRIMARY KEY CLUSTERED 
(
	InsuranceId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

