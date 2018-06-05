USE NextCARE
GO

/****** Object:  Table dbo.StudentAddress    Script Date: 6/3/2018 2:35:06 PM ******/
IF OBJECT_ID('dbo.StudentAddress', 'U') IS NOT NULL
BEGIN
  ALTER TABLE dbo.StudentAddress DROP CONSTRAINT FK_StudentAddress_Address
  ALTER TABLE dbo.StudentAddress DROP CONSTRAINT FK_StudentAddress_Student
  DROP TABLE dbo.StudentAddress;
END
GO

/****** Object:  Table dbo.StudentAddress    Script Date: 6/3/2018 2:35:06 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.StudentAddress(
	StudentAddressId int IDENTITY(1,1) NOT NULL,
	StudentId int NOT NULL,
	AddressId int NOT NULL,
	IsPrimary bit NOT NULL,
 CONSTRAINT PK_StudentAddress PRIMARY KEY CLUSTERED
(
	StudentAddressId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE dbo.StudentAddress  WITH CHECK ADD  CONSTRAINT FK_StudentAddress_Student FOREIGN KEY(StudentId)
REFERENCES dbo.Student (StudentId)
GO

ALTER TABLE dbo.StudentAddress CHECK CONSTRAINT FK_StudentAddress_Student
GO

ALTER TABLE dbo.StudentAddress  WITH CHECK ADD  CONSTRAINT FK_StudentAddress_Address FOREIGN KEY(AddressId)
REFERENCES dbo.Address (AddressId)
GO

ALTER TABLE dbo.StudentAddress CHECK CONSTRAINT FK_StudentAddress_Address
GO

