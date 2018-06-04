USE NextCARE
GO

/****** Object:  Table dbo.StudentPhoto    Script Date: 6/1/2018 8:40:57 AM ******/
IF OBJECT_ID('dbo.StudentPhoto', 'U') IS NOT NULL
	DROP TABLE dbo.StudentPhoto
GO

/****** Object:  Table dbo.StudentPhoto    Script Date: 6/1/2018 8:40:57 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.StudentPhoto
(
  StudentPhotoId int IDENTITY(1,1) NOT NULL,
  StudentId int NOT NULL,
  PhotoId int NOT NULL,
  IsPrimary bit NOT NULL,
  CONSTRAINT PK_StudentPhoto PRIMARY KEY CLUSTERED
(
	StudentPhotoId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

