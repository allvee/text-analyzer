import App from './src/app.js'

import { applicationConfigurations } from './src/config/index.js'

const { appName, port } = applicationConfigurations

const server = App.listen(port, () => {
    console.log(`text-analyzer is running on: ${appName}`)
})

export default server;
