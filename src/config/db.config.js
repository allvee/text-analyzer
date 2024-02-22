import { createPool } from 'mysql2/promise'
import applicationConfigurationDetails from './index.js'
const { dbConfigurations } = applicationConfigurationDetails
const { waitForConnections, queueLimit, connectionLimit, connectTimeout, host, user, password, database, multipleStatements } = dbConfigurations

const poolConfig = {
    host,
    user,
    password,
    database,
    multipleStatements,
    connectionLimit,
    connectTimeout,
    waitForConnections,
    queueLimit
}

const pool = createPool(poolConfig)

export const getConnection = () => pool.getConnection()
export const releaseConnection = connection => connection.release()

export default {
    getConnection,
    releaseConnection
}
