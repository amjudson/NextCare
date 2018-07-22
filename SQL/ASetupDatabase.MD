# NextCARE Database Setup
**Steps for setting up database and loading test data:

SQL Code: [NextCARE SQL](https://github.com/amjudson/NextCare/tree/master/SQL)

1. Create database:
  - In file 'CreateNextCARE_DB.sql' replace <Your File Location> with the actual location you are placing the database files:
  ```sql
  ( NAME = N'NextCARE', FILENAME = N'<Your File Location>\NextCARE.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
  LOG ON
  ( NAME = N'NextCARE_log', FILENAME = N'<Your File Location>\NextCARE_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
  ```
  - Open SSMS
    - Open the 'CreateNextCARE_DB.sql'
    - Execute the query
  - Verify database is created in the Object Explorer

2.  Create tables
  - Execute BuildTables.sql
    - This will DROP all table and indexes and create table with references

3. Insert test data:
  - Execute the following queries in order:
    - InsertTypes.sql
    - InsertPersonAddressPhoneEmail.sql
    - InsertMapData.sql
    - InsertStudent.sql
    - InsertInvoice.sql (follow instuction contained in file)
    - InsertGuardians.sql
    - InsertEmergencyContacts.sql

4. Run SELECT queries to validate data was loaded

