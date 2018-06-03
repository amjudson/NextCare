USE NextCARE
GO

/****** Object:  Table dbo.Document    Script Date: 5/29/2018 6:53:54 PM ******/
IF OBJECT_ID('dbo.Document', 'U') IS NOT NULL
	DROP TABLE dbo.Document
GO

/****** Object:  Table dbo.Document    Script Date: 5/29/2018 6:53:54 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.Document(
	DocumentId int IDENTITY(1,1) NOT NULL,
	DocumentOwnerId int NOT NULL,
	IsRequired bit NOT NULL,
	DocumentTypeId int NOT NULL,
	DocumentSatisfied bit NOT NULL,
	Location nvarchar(4000) NOT NULL,
 CONSTRAINT PK_Document PRIMARY KEY CLUSTERED
(
	DocumentId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

