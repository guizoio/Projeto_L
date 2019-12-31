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
<<<<<<< HEAD
            server: '172.17.0.2',
            //serve: '192.168.0.110,1433',
=======
            //server: '172.17.0.2',
            server: '192.168.0.110',
>>>>>>> f3d69896fb06217a340d07e11e7e8948025c584a
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