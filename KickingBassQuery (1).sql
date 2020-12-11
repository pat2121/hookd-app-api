CREATE TABLE[dbo].[LOCATIONS](
[Location_ID] [varchar](4) NOT NULL,
[City] [varchar](20),
[State] [varchar](20),
[Type] [varchar](10),
[Name] [varchar](20),
[Description] [varchar](30),
[Lat] [int],
[Lon] [int],
CONSTRAINT LOCATION_PK PRIMARY KEY (Location_ID));

CREATE TABLE[dbo].[SPECIES](
[SPECIES_ID] [varchar](4) NOT NULL,
[Species_Name] [varchar](20),
[Common_Name] [varchar](20),
[Color] [varchar](10),
CONSTRAINT SPECIES_PK PRIMARY KEY (Species_ID));

CREATE TABLE[dbo].[USERS](
[USERS_ID] [varchar](5) NOT NULL,
[Email] [varchar](15),
[Username] [varchar](10),
[First_Name] [varchar](15),
[Last_Name] [varchar](15),
[Password] [varchar](15),
[Phone_number] [int],
CONSTRAINT USERS_PK PRIMARY KEY (Users_ID));

CREATE TABLE[dbo].[FRIENDS](
[FRIENDS_ID] [varchar](4) NOT NULL,
[Number_Friends] [int],
[Friends_Username] [varchar](10),
[Friends_Posts] [int],
[USERS_ID] [varchar](5),
CONSTRAINT FRIENDS_PK PRIMARY KEY (Friends_ID),
CONSTRAINT FRIENDS_FK FOREIGN KEY (USERS_ID) REFERENCES USERS (USERS_ID));

CREATE TABLE[dbo].[POSTS](
[POSTS_ID] [varchar](4) NOT NULL,
[Picture] [binary](2000),
[Description] [varchar](30),
[Is_Private] [varchar](10),
[USERS_ID] [varchar](5),
[SPECIES_ID] [varchar](4),
[Location_ID] [varchar](4),
CONSTRAINT POSTS_PK PRIMARY KEY (POSTS_ID),
CONSTRAINT POSTS_FK FOREIGN KEY (USERS_ID) REFERENCES USERS (USERS_ID),
CONSTRAINT POSTS_FK1 FOREIGN KEY (SPECIES_ID) REFERENCES SPECIES (SPECIES_ID),
CONSTRAINT POSTS_FK2 FOREIGN KEY (Location_ID) REFERENCES LOCATIONS (Location_ID));

CREATE TABLE[dbo].[LIKES](
[LIKES_ID] [varchar](4) NOT NULL,
[Number_Likes] [int],
[USERS_ID] [varchar](5),
[POSTS_ID] [varchar](4),
CONSTRAINT LIKES_PK PRIMARY KEY (LIKES_ID),
CONSTRAINT LIKES_FK FOREIGN KEY (USERS_ID) REFERENCES USERS (USERS_ID),
CONSTRAINT LIKES_FK1 FOREIGN KEY (POSTS_ID) REFERENCES POSTS (POSTS_ID));

CREATE TABLE[dbo].[SPOTS](
[SPOTS_ID] [varchar](4) NOT NULL,
[Location_Name] [varchar](20),
[Number_Locations] [int],
[USERS_ID] [varchar](5),
[Location_ID] [varchar](4),
CONSTRAINT SPOTS_PK PRIMARY KEY (SPOTS_ID),
CONSTRAINT SPOTS_FK FOREIGN KEY (USERS_ID) REFERENCES USERS (USERS_ID),
CONSTRAINT SPOTS_FK1 FOREIGN KEY (Location_ID) REFERENCES LOCATIONS (Location_ID)); 

INSERT INTO LOCATIONS VALUES ('0', 'Harrisonburg', 'Virginia', 'Lake', 'Shennadoah', 'Big', '10', '30');


SELECT * FROM LOCATIONS;


