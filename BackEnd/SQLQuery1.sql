create table tbl_Vaccinations
(
	vaccination_id int primary key identity,
	id varchar(9) not null,
	producer varchar(20) not null,
	dateVaccination date not null
)
create table tbl_CoronaSicks
(
	coronaSick_id int primary key identity,
	id varchar(9) not null,
	startDate date not null,
	endDate date not null
)