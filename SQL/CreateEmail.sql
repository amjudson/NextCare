USE NextCARE
GO

/****** Object:  Table dbo.Email    Script Date: 5/29/2018 6:54:08 PM ******/
IF OBJECT_ID('dbo.Email', 'U') IS NOT NULL
	DROP TABLE dbo.Email
GO

/****** Object:  Table dbo.Email    Script Date: 5/29/2018 6:54:08 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.Email(
	EmailId int IDENTITY(1,1) NOT NULL,
	EmailAddress nvarchar(1024) NOT NULL,
	EmailTypeId int NOT NULL,
	isPrimary bit NOT NULL,
 CONSTRAINT PK_Email PRIMARY KEY CLUSTERED
(
	EmailId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

/*

ALTER TABLE [dbo].[AcademyAddress]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AcademyAddress_dbo.Academy_AcademyId] FOREIGN KEY([AcademyId])
REFERENCES [dbo].[Academy] ([AcademyId])
GO

ALTER TABLE [dbo].[AcademyAddress] CHECK CONSTRAINT [FK_dbo.AcademyAddress_dbo.Academy_AcademyId]
GO

ALTER TABLE [dbo].[AcademyAddress]  WITH CHECK ADD  CONSTRAINT [FK_dbo.AcademyAddress_dbo.Address_AddressId] FOREIGN KEY([AddressId])
REFERENCES [dbo].[Address] ([AddressId])
GO

ALTER TABLE [dbo].[AcademyAddress] CHECK CONSTRAINT [FK_dbo.AcademyAddress_dbo.Address_AddressId]
GO
*/