module.exports = {
    port: process.env.PORT || 8081,
    db: {
        database: process.env.DB_NAME || 'applicationtest',
        user: process.env.DB_USER || 'applicationtest',
        password: process.env.DB_PASS || 'applicationtest',
        options: {
            dialect: process.env.dialect || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './applicationtest.sqlite'
        }
    }
}