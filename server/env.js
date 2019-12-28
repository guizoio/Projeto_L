var config = {
    teste_dev: {
        url: 'http://localhost',
        port: 3022,
        ambiente: 'DEV',
        session: {
            secret: 'teste',
            resave: false,
            saveUninitialized: false,
            cookie: { secure: false }
        },
        database: {
            user: 'sa',
            password: 'Ovodepascoades2',
            server: '172.17.0.2',
            database: 'projeto_l',
            requestTimeout: 180000,
            connectionTimeout: 180000,
            options: { encrypt: false },
            pool: {
                idleTimeoutMillis: 180000,
                max: 100
            }
        }
    }
}

exports.get = function get(env) {
    return config.teste_dev;
}