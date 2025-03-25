import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db/dbConn.js'
import dbRoutes from './routes/dbRoutes.js'
import cors from 'cors'
import {corsOptions} from './config/corsOptions.js'


dotenv.config()

const app = express()
const port = process.env.PORT

app.use(cors(corsOptions))
app.use(express.json())
app.use('/db', dbRoutes)

app.listen(port, () => {
    connectDB()
    console.log(`Server is listening on port ${port}`)
})  