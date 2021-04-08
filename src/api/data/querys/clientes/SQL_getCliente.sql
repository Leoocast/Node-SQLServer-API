--DECLARE @IdCliente INT = 1

SELECT 
    *
FROM 
    Clientes AS CL 
INNER JOIN 
    ReglasClientes AS RECL 
    ON 
        RECL.IdCliente = CL.IdCliente 
LEFT JOIN 
    PeriodosClientes AS PECL 
    ON 
        PECL.IdReglaCliente = RECL.IdReglaCliente
WHERE 
	CL.IdCliente = @IdCliente 