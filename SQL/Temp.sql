USE [MAData]
GO

ALTER TABLE [dbo].[AcademyAddress] DROP CONSTRAINT [FK_dbo.AcademyAddress_dbo.Address_AddressId]
GO

ALTER TABLE [dbo].[AcademyAddress] DROP CONSTRAINT [FK_dbo.AcademyAddress_dbo.Academy_AcademyId]
GO

/****** Object:  Table [dbo].[AcademyAddress]    Script Date: 6/1/2018 2:06:09 PM ******/
DROP TABLE [dbo].[AcademyAddress]
GO

/****** Object:  Table [dbo].[AcademyAddress]    Script Date: 6/1/2018 2:06:09 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[AcademyAddress](
	[AcademyAddressId] [int] IDENTITY(1,1) NOT NULL,
	[AddressId] [int] NOT NULL,
	[AcademyId] [int] NOT NULL,
 CONSTRAINT [PK_dbo.AcademyAddress] PRIMARY KEY CLUSTERED 
(
	[AcademyAddressId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

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

