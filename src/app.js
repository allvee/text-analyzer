import cors from 'cors'
import express from 'express'

import { fileConfigurations } from './config/index.js'

import textRoutes from './routes/textRoutes.js';

const app = express()
app.use(cors())
const setCustomHeader = function (req, res, next) {
    req.accepts('*')

    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'x-access-token, Origin, Content-Type, Accept, Accept-Language, Content-Language, DPR, Save-Data, Viewport-Width, Width, X-Requested-With')
    next()
}
app.all('*', setCustomHeader)

const { ftpFolder } = fileConfigurations

app.use(express.static(`${ftpFolder}`))

app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use('/api/text', textRoutes);

app.get('/', async (req, res) => {
    res.status(200).json({ title: 'textAnalyzer API' })
})

app.use((req, res, next) => {
    res.status(404).json({
        message: `${req.path} Route not found`
    })
})

export default app
