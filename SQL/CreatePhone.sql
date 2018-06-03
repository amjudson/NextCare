USE NextCARE
GO

/****** Object:  Table dbo.Phone    Script Date: 5/29/2018 6:54:52 PM ******/
IF OBJECT_ID('dbo.Phone', 'U') IS NOT NULL
	DROP TABLE dbo.Phone
GO

/****** Object:  Table dbo.Phone    Script Date: 5/29/2018 6:54:52 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.Phone(
	PhoneId int IDENTITY(1,1) NOT NULL,
	Number nvarchar(20) NOT NULL,
	Extention nvarchar(10) NULL,
	PhoneTypeId int NOT NULL,
	IsPrimary bit NOT NULL,
 CONSTRAINT PK_Phone PRIMARY KEY CLUSTERED
(
	PhoneId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

