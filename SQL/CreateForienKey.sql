USE [NextCARE]
GO

ALTER TABLE [dbo].[Address] DROP CONSTRAINT [FK_Address_AddressType]
GO

/****** Object:  Table [dbo].[Address]    Script Date: 6/4/2018 6:49:51 PM ******/
DROP TABLE [dbo].[Address]
GO

/****** Object:  Table [dbo].[Address]    Script Date: 6/4/2018 6:49:51 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Address](
	[AddressId] [int] IDENTITY(1,1) NOT NULL,
	[AddressLine1] [nvarchar](255) NOT NULL,
	[AddressLIne2] [nvarchar](255) NULL,
	[City] [nvarchar](50) NOT NULL,
	[StateId] [int] NOT NULL,
	[Zip] [nvarchar](20) NOT NULL,
	[AddressTypeId] [int] NOT NULL,
	[IsPrimary] [bit] NOT NULL,
 CONSTRAINT [PK_Address] PRIMARY KEY CLUSTERED 
(
	[AddressId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[Address]  WITH CHECK ADD  CONSTRAINT [FK_Address_AddressType] FOREIGN KEY([AddressTypeId])
REFERENCES [dbo].[AddressType] ([AddressTypeId])
GO

ALTER TABLE [dbo].[Address] CHECK CONSTRAINT [FK_Address_AddressType]
GO

