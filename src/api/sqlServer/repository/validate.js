const assert = require( "assert" )
const dotenv = require( "dotenv" )

module.exports = () => {
    // Lee el archivo .env
    dotenv.config()

    const { PORT,
        HOST,
        HOST_URL,
        COOKIE_ENCRYPT_PWD,
        SQL_SERVER,
        SQL_DATABASE,
        SQL_USER,
        SQL_PASSWORD,
        SQL_INSTANCE,
     } = process.env

    assert( PORT, "PORT configuration is required." )
    assert( HOST, "HOST configuration is required." )
    assert( HOST_URL, "HOST_URL configuration is required." )
    assert( COOKIE_ENCRYPT_PWD, "COOKIE_ENCRYPT_PWD configuration is required." )
    assert( SQL_SERVER, "SQL_SERVER configuration is required." )
    assert( SQL_DATABASE, "SQL_DATABASE configuration is required." )
    assert( SQL_USER, "SQL_USER configuration is required." )
    assert( SQL_PASSWORD, "SQL_PASSWORD configuration is required." )
    assert( SQL_INSTANCE, "SQL_INSTANCE configuration is required." )
}