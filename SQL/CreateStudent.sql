USE NextCARE
GO

/****** Object:  Table dbo.Student    Script Date: 6/1/2018 8:39:51 AM ******/
IF OBJECT_ID('dbo.Student', 'U') IS NOT NULL
	DROP TABLE dbo.Student
	GO

/****** Object:  Table dbo.Student    Script Date: 6/1/2018 8:39:51 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.Student(
	StudentId int IDENTITY(1,1) NOT NULL,
	PersonId int NOT NULL,
	GradeClassLevelId int NOT NULL,
  Alias nvarchar NULL,
  PhysicianId int NOT NULL,
 CONSTRAINT PK_Student PRIMARY KEY CLUSTERED
(
	StudentId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

