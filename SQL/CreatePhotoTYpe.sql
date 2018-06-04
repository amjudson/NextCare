USE NextCARE
GO

/****** Object:  Table dbo.PhotoType    Script Date: 6/1/2018 8:40:57 AM ******/
IF OBJECT_ID('dbo.PhotoType', 'U') IS NOT NULL
	DROP TABLE dbo.PhotoType
GO

/****** Object:  Table dbo.PhotoType    Script Date: 6/1/2018 8:40:57 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.PhotoType
(
  PhotoTypeId int IDENTITY(1,1) NOT NULL,
  Description nvarchar(50) NOT NULL,
  CONSTRAINT PK_PhotoType PRIMARY KEY CLUSTERED
(
	PhotoTypeId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

