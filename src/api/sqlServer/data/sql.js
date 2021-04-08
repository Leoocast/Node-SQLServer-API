const dataClient = require( "../connection" )

module.exports = {
   name: "sql",
   version: "1.0.0",
   register: async server => {
       // Obtiene la información de la conexión
       const config = server.app.config.sql

       //Crea la instancia de la base de datos del cliente
       const client = await dataClient( server, config )

       // El cliente es expuesto para que cualquiera pueda verlo
       server.expose( "client", client )
   }
}