USE NextCARE
GO

/****** Object:  Table [dbo].[EmailType]    Script Date: 6/1/2018 8:38:30 AM ******/
IF OBJECT_ID('dbo.PersonType', 'U') IS NOT NULL
	DROP TABLE dbo.EmailType
	GO

/****** Object:  Table [dbo].[EmailType]    Script Date: 6/1/2018 8:38:30 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.EmailType(
	EmailTypeId int IDENTITY(1,1) NOT NULL,
	Description nvarchar(50) NOT NULL
CONSTRAINT PK_EmailType PRIMARY KEY CLUSTERED 
(
	EmailTypeId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

