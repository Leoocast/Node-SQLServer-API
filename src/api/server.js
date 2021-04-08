const Hapi = require( "hapi" )
const data = require( "./sqlServer/data" )
const controllers = require( "./controllers" )

const app = async config => {
   const { host, port } = config

   // Crea la instancia del servidor
   const server = Hapi.server( { host, port } )

   // Guarda la config para usarse después
   server.app.config = config

   // Inicia la conexión
   await data.register( server )

   // Controllers (Rutas)
   await controllers.registerRoutes( server )

   return server
}

module.exports = app