#DROP DATABASE paginabolsa;
 #ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';

    CREATE DATABASE paginabolsa;
    USE paginabolsa;
    CREATE TABLE clientes(
        id_cliente INT AUTO_INCREMENT,
        dni  CHAR(9)UNIQUE,
        nombre VARCHAR(100)NOT NULL,
        telefono VARCHAR(12),
        email VARCHAR(50)UNIQUE NOT NULL,
        contraseña VARCHAR (100),
        direccion VARCHAR (100),
        PRIMARY KEY(id_cliente)
    ); 
CREATE TABLE consultas(
        id_consulta INT AUTO_INCREMENT,
        texto_consulta VARCHAR(1000) NOT NULL,
        fecha   DATE NOT NULL,
	    fk_id_cliente_clientes INT,
		FOREIGN KEY(fk_id_cliente_clientes) REFERENCES clientes(id_cliente),
		PRIMARY KEY(id_consulta)
    ); 
 CREATE TABLE empresas(
        id_empresa INT AUTO_INCREMENT,
        nombre_empresa VARCHAR(50)UNIQUE,
        tipo_empresa VARCHAR(100),
        precio_acciones INT,
        direccion VARCHAR (100),
        PRIMARY KEY(id_empresa)
    ); 

 CREATE TABLE transacciones(
        id_transaccion INT AUTO_INCREMENT,
        fk_id_cliente_clientes INT,
        fk_id_empresa_empresas INT,
        fecha DATE NOT NULL,
        numero_acciones INT NOT NULL,
        total_pagado INT,
        FOREIGN KEY(fk_id_cliente_clientes) REFERENCES clientes(id_cliente),
        FOREIGN KEY(fk_id_empresa_empresas) REFERENCES empresas(id_empresa),
        
        PRIMARY KEY(id_transaccion)
    ); 
    
     INSERT INTO empresas VALUES(NULL, "Google","Tecnología y comunicación",100,"Calle Pez 8");
     INSERT INTO empresas VALUES(NULL, "Facebook","Tecnología y comunicación",100,"Calle Pez 9");
     INSERT INTO empresas VALUES(NULL, "Twitter","Tecnología y comunicación",100,"Calle de la Luna 4");
     
     SELECT * FROM  empresas WHERE tipo_empresa="Automoción";
     
     INSERT INTO empresas VALUES(NULL, "Mercedes","Automoción",100,"Calle MuchaPasta 1");
     INSERT INTO empresas VALUES(NULL, "Ferrari","Automoción",100,"Calle YoTengoMas 2");
     INSERT INTO empresas VALUES(NULL, "Lamborghini","Automoción",100,"Calle Fortuna 2");
     
     
     