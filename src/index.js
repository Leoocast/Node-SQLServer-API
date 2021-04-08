const config = require( "./api/sqlServer/config" )
const server = require( "./api/server" )

const startServer = async () => {
    try {
        
        //Crea la instancia del server
        const app = await server( config )
 
        await app.start()
 
        console.log( `Server running at http://${ config.host }:${ config.port }`)
    
    } catch ( err ) {

        console.log( "Startup error:", err )
    }
 }

startServer()