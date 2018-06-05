USE NextCARE
GO

/****** Object:  Table dbo.StudentPhone    Script Date: 6/3/2018 2:35:06 PM ******/
IF OBJECT_ID('dbo.StudentPhone', 'U') IS NOT NULL
  -- ALTER TABLE dbo.StudentPhone DROP CONSTRAINT FK_StudentPhone_Phone
  -- ALTER TABLE dbo.StudentPhone DROP CONSTRAINT FK_StudentPhone_Student
	DROP TABLE dbo.StudentPhone
GO

/****** Object:  Table dbo.StudentPhone    Script Date: 6/3/2018 2:35:06 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.StudentPhone(
	StudentPhoneId int IDENTITY(1,1) NOT NULL,
	StudentId int NOT NULL,
	PhoneId int NOT NULL,
	IsPrimary bit NOT NULL,
 CONSTRAINT PK_StudentPhone PRIMARY KEY CLUSTERED
(
	StudentPhoneId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE dbo.StudentPhone  WITH CHECK ADD  CONSTRAINT FK_StudentPhone_Student FOREIGN KEY(StudentId)
REFERENCES dbo.Student (StudentId)
GO

ALTER TABLE dbo.StudentPhone CHECK CONSTRAINT FK_StudentPhone_Student
GO

ALTER TABLE dbo.StudentPhone  WITH CHECK ADD  CONSTRAINT FK_StudentPhone_Phone FOREIGN KEY(PhoneId)
REFERENCES dbo.Phone (PhoneId)
GO

ALTER TABLE dbo.StudentPhone CHECK CONSTRAINT FK_StudentPhone_Phone
GO

