import './env.config.js'

export const appConfigurations = {
    dbConfigurations: {
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT) || 3306,
        user: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || 'nopass',
        database: process.env.DB_DATABASE || 'textAnalyzer',
        dialect: process.env.DB_CONNECTION || 'mysql',
        multipleStatements: true,
        maxPoolLimit: parseInt(process.env.DB_POOL_MAX) || 10,
        minPoolLimit: parseInt(process.env.DB_POOL_MIN) || 0,
        acquireTimeout: parseInt(process.env.DB_POOL_ACQUIRE) || 30000,
        idle: parseInt(process.env.DB_POOL_IDLE) || 10000,
        connectTimeout: parseInt(process.env.DB_CONNECT_TIMEOUT) || 10000,
        connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT) || 10,
        queueLimit: parseInt(process.env.DB_QUEUE_LIMIT) || 0,
        waitForConnections: process.env.DB_WAIT_FOR_CONNECTIONS === 'true' || true
    },
    applicationConfigurations: {
        appName: process.env.APP_NAME || `http://localhost:${process.env.PORT || 8000}`,
        appEnv: process.env.APP_ENV || 'development',
        port: parseInt(process.env.PORT) || 8000
    },
    logConfigurations: {
        logEnable: process.env.LOG_ENABLE === 1 || 1,
        logDirectory: process.env.LOG_DIRECTORY || 'D:/node/textAnalyzer/logs/'
    },
    fileConfigurations: {
        ftpFolder: 'public'
    }
}
