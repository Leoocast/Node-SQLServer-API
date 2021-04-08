let _sql = null
let _getConnection = null

const register = async ( { sql, getConnection } ) => {
    _sql = sql
    _getConnection = getConnection
 }

 const request = async (query, params) => {

    const context = await _getConnection()

    const request = context.request()

    params.forEach(param => {
        request.input(param[0], param[1])
    })

    return request.query(query)
}
 
 module.exports.register = register

 module.exports.request = request