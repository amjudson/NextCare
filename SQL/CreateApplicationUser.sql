USE NextCARE
GO

/****** Object:  Table dbo.ApplicationUser    Script Date: 5/29/2018 6:54:08 PM ******/
IF OBJECT_ID('dbo.ApplicationUser', 'U') IS NOT NULL
	DROP TABLE dbo.ApplicationUser
GO

/****** Object:  Table dbo.ApplicationUser    Script Date: 5/29/2018 6:54:08 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE dbo.ApplicationUser
(
  ApplicationUserId int IDENTITY(1,1) NOT NULL,
  UserName nvarchar(512) NOT NULL,
  UserPassword nvarchar(1024) NOT NULL,
  UserSalt NVARCHAR(512) NOT NULL,
  IsAdmin bit NOT NULL,
  IsStudent bit NOT NULL,
  IsAccountHolder bit NOT NULL,
  PersonId int Not NULL,
  CONSTRAINT PK_ApplicationUser PRIMARY KEY CLUSTERED
(
	ApplicationUserId ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

