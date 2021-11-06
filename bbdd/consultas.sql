 USE paginabolsa;
 
 #Consulta -> Comprobación email 
 SELECT * FROM clientes WHERE email= ? ;
 
 #Consulta -> Comprobación email (si no existe insertamos clientes)
 INSERT INTO clientes VALUES(NULL, ?,?,?,?,NULL,?);
 
#Consulta -> Comprobación email (si existe insertamos clientes)
INSERT INTO consultas VALUES(NULL, ?,?,?);

#Login -> Validar existencia del usuario

SELECT * FROM clientes WHERE dni= ? AND contraseña= ? ;

#Login/Registrarme -> ¿Has hecho consulta?

	#No lo ha hecho-> Usuario nuevo precreación comprobar existencia email

 INSERT INTO clientes VALUES(NULL, ?,?,?,?,?,?);
 SELECT * FROM clientes WHERE email= ? ;
 
	#Si lo ha hecho-> pedimos el email (Función comprobar los campos y los (=NULL) los pintamos) push a arrayNULL
 
 SELECT * FROM clientes WHERE email= ? ;
 
 #Longitud del bucle debe ser igual a los campos NULL. Un bucle a cada update
 
 UPDATE clientes SET ?? = ? WHERE email = ?;
 
 #Transacciones -> añadir
 
  SELECT id_empresa FROM empresas WHERE nombre_empresa= ? ;
  SELECT precio_acciones FROM empresas WHERE nombre_empresa= ? ;  
 
 INSERT INTO transacciones VALUES(NULL, ?,?,?,?,?);
 
 #Consultas de facturas
	#Facturas totales (carrito)    
    SELECT * FROM transacciones WHERE fk_id_cliente_clientes = ? ;
    
    #Facturas por rango de fechas
    SELECT * FROM transacciones WHERE fecha BETWEEN ? AND ?;
    
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





 

 
 