SELECT 
    * 
FROM 
    Clientes AS CL 
INNER JOIN 
    ReglasClientes AS RECL 
    ON 
        RECL.IdCliente = CL.IdCliente 
INNER JOIN 
    ReglasTareas AS RETA 
    ON 
        RETA.IdReglaCliente = RECL.IdReglaCliente 
INNER JOIN 
    Tareas AS TA 
        ON TA.IdTarea = RETA.IdTarea 
LEFT JOIN 
    PeriodosTareas AS PETA 
    ON 
        PETA.IdReglaTarea = RETA.IdReglaTarea
WHERE 
	CL.IdCliente = @IdCliente 