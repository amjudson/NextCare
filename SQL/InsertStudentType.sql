USE NextCARE;
GO

DELETE FROM StudentType;

SET IDENTITY_INSERT StudentType ON;
insert into StudentType
  (StudentTypeId, Description)
values(1, 'Toddler');
insert into StudentType
  (StudentTypeId, Description)
values(2, 'Kindegarden');
insert into StudentType
  (StudentTypeId, Description)
values(3, 'Grade School');
insert into StudentType
  (StudentTypeId, Description)
values(4, 'Old');
