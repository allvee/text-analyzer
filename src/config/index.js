import './env.config.js'

import * as config from './configuration.js'

const configurations = config

export const dbConfigurations = configurations.appConfigurations.dbConfigurations
export const applicationConfigurations = configurations.appConfigurations.applicationConfigurations
export const fileConfigurations = configurations.appConfigurations.fileConfigurations
export const logConfigurations = configurations.appConfigurations.logConfigurations

export default { dbConfigurations, applicationConfigurations, fileConfigurations, logConfigurations }
