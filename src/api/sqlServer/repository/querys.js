const { statSync, readdirSync } = require('fs')
const fse = require( "fs-extra" )
const { join } = require( "path" )

const GetQuerysByFolder = async folderName => {
   const filePath = join( process.cwd(), "src", 'api', "data", "querys", folderName )

   const files = await fse.readdir( filePath )

   const sqlFiles = files.filter( f => f.endsWith( ".sql" ) )

   const queries = {}
   for ( let i = 0; i < sqlFiles.length; i++ ) {
       const query = fse.readFileSync( join( filePath, sqlFiles[ i ] ), { encoding: "UTF-8" } )
       queries[ sqlFiles[ i ].replace( ".sql", "" ).replace('SQL_','') ] = query
   }
   return queries
}


const GetAllQuerys = async () => {
   const path = `${process.cwd()}\\src\\api\\data\\querys`

   const getDirs = source => readdirSync(path).filter(file => statSync(path+'/'+file).isDirectory())

   const dirs = getDirs(path)

   const querys = {}

   dirs.forEach(async dir => {
      querys[dir] = await GetQuerysByFolder(dir)
   })

   return querys
}


module.exports = async folder => {
   return await GetQuerysByFolder(folder)
}