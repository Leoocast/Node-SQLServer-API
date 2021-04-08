const clientes = require( "./clientes" )

module.exports.registerRoutes = async server => {
   await clientes.registerRoutes( server )

   server.route( {
       method: "GET",
       path: "/",
       handler: async ( request, h ) =>  "Conexión correcta"
   } )
}