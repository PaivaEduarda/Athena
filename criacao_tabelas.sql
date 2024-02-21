create schema Athena

create table Athena.Usuario(
	usuario varchar(15) primary key,
	senha ntext not null,
	telefone varchar(11) not null,
	nome varchar(50) not null, 
	email varchar(50) not null,
	altura int not null,
	peso int not null,
	tipo_sanguineo varchar(2),
	doenca ntext,
	data_de_nascimento date not null,
	nomeSeguranca varchar(50) not null,
	telefoneSeguranca varchar(11) not null
);

create table Athena.Denuncia(
	numero_denuncia int identity(0, 1) primary key,
	id_usuario varchar(15) not null,
	longitude nText not null,
	latitude nText not null,
	foreign key (id_usuario) references Athena.Usuario(usuario)
);

create table Athena.Relato(
	numero_relato int identity(0,1) primary key,
	id_usuario varchar(15) not null, 
	relato nText not null,
	dataRelato date not null,
	rua nText not null,
	bairro nText not null,
	cidade nText not null,
	foreign key (id_usuario) references Athena.Usuario(usuario)
);