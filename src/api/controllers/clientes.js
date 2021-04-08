const Clientes = require('../data/datasource/clientes/index')

module.exports.registerRoutes = async server => {
    server.route( {
        method: "GET",
        path: "/api/clientes",
        config: {
            handler: async request => {
                try {

                    // FIXME: Esto debe venir como parámetro
                    const userId = "1"
 
                    const res = await Clientes.getCliente( userId )
 
                    // return the recordset object
                    return res.recordset
                } catch ( err ) {
                    console.log( err )
                }
            }
        }
    } )

    server.route( {
        method: "GET",
        path: "/api/clientes/tarea",
        config: {
            handler: async request => {
                try {

                    // FIXME: Esto debe venir como parámetro
                    const userId = "1"
 
                    const res = await Clientes.getTareasCliente( userId )
 
                    // return the recordset object
                    return res.recordset
                } catch ( err ) {
                    console.log( err )
                }
            }
        }
    } )
 }