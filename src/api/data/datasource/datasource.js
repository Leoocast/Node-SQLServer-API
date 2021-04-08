class Datasource {
    constructor(dataSource){
         this.dataSource = dataSource
         this._load()
    }

    async _load(){
         this.querys = await require( "../../sqlServer/repository/querys")(this.dataSource)
         this.request = require('../../sqlServer/connection/request').request
    }
}

module.exports = Datasource