const sql = require( "mssql/msnodesqlv8" )

const client = async ( server, config ) => {

   let pool = null
   const closePool = async () => {
       try {
           // Intenta cerrar la pool de la conexion
           await pool.close()

           //Se setea null una vez cerrada
           pool = null
       } catch ( err ) {

           pool = null
           server.log( [ "error", "data" ], "closePool error" )
           server.log( [ "error", "data" ], err )
       }
   }

   const getConnection = async () => {
       try {
           if ( pool ) {
               //Si ya hayna una pool creada, la retorna
               return pool
           }

            pool = await sql.connect( config )

            // Si pasa algún error al conectarse a la pool
            pool.on( "error", async err => {
                server.log( [ "error", "data" ], "connection pool error" )
                server.log( [ "error", "data" ], err )
                await closePool()
            } )

            console.log("")
            console.log("=================================")
            console.log("Conexión SQL creada correctamente")
            console.log("=================================")
            
            return pool
       } catch ( err ) {

            console.log("")
            console.log("==== ERROR EN LA CONEXIÓN AL SERVIDOR ====")
            console.log("")
            server.log( [ "error", "data" ], err )
            pool = null
       }
   }

   const request = require('./request')

   await request.register({ sql, getConnection } )
}

module.exports = client