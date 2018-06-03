USE NextCARE
GO

/****** Object:  Table dbo.Address    Script Date: 5/29/2018 6:52:45 PM ******/
IF OBJECT_ID('dbo.Address', 'U') IS NOT NULL
  DROP TABLE dbo.Address;
GO

/****** Object:  Table dbo.Address    Script Date: 5/29/2018 6:52:45 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.Address(
	AddressId int IDENTITY(1,1) NOT NULL,
	AddressLine1 nvarchar(255) NOT NULL,
	AddressLIne2 nvarchar(255) NULL,
	City nvarchar(50) NOT NULL,
	StateId int NOT NULL,
	Zip nvarchar(20) NOT NULL,
	AddressTypeId int NOT NULL,
	IsPrimary bit NOT NULL,
 CONSTRAINT PK_Address PRIMARY KEY CLUSTERED
(
	AddressId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

