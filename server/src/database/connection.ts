import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'mysql',
    connection:{        
        user : '',
        password : '',
        database : 'ecoleta',
        insecureAuth : true
    },
});

export default connection;
