const Datasource = require('../datasource')

class Clientes extends Datasource {
     constructor(){
          super("clientes")
     }

     async getCliente(userId){
           
           const params = [
               ["IdCliente", userId]
           ]
   
           return this.request(this.querys.getCliente, params)
     }

     async getTareasCliente(userId){
           
          const params = [
              ["IdCliente", userId]
          ]
  
          return this.request(this.querys.GetTareasCliente, params)
    }
}

module.exports = new Clientes()