import App from './src/app.js'

import { applicationConfigurations } from './src/config/index.js'
const { appName, port } = applicationConfigurations

App.listen(port, () => {
    console.log(`textAnalyzer is running on: ${appName}`)
})
