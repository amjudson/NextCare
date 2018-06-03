USE NextCARE
GO

/****** Object:  Table dbo.StudentDocument    Script Date: 6/1/2018 8:39:10 AM ******/
IF OBJECT_ID('dbo.StudentDocument', 'U') IS NOT NULL
	DROP TABLE dbo.StudentDocument
GO

/****** Object:  Table dbo.StudentDocument    Script Date: 6/1/2018 8:39:10 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.StudentDocument(
	StudentDocumentId int IDENTITY(1,1) NOT NULL,
	StudentId int NOT NULL,
	DocumentId int NOT NULL,
	IsPrimary bit NOT NULL,
 CONSTRAINT PK_StudentDocument PRIMARY KEY CLUSTERED 
(
	StudentDocumentId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

