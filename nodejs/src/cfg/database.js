import pg  from 'pg'

export async function  helloWorld() {

    /** 
     * @see  https://node-postgres.com 
     * */
    const client = new pg.Client({
        host: 'localhost', //or localhost
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'postgres',
      })
    await client.connect()
    
    const res = await client.query('SELECT hello FROM hello_world')
    const result = res.rows[0].hello
    await client.end()
    
    return result
}

export async function  question1Query() {

    /**
     * @see  https://node-postgres.com
     * */
    const client = new pg.Client({
        host: 'localhost', //or localhost
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'postgres',
    })
    await client.connect()

    const res = await client.query('SELECT count(*) FROM talosien WHERE date_arrivee <= \'2022-08-08\'')
    const result = res.rows[0].count
    await client.end()

    return result
}