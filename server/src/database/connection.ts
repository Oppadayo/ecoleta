import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'mysql',
    connection:{        
        user : 'root',
        password : 'pc159357',
        database : 'ecoleta',
        insecureAuth : true
    },
});

export default connection;