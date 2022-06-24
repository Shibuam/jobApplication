import express from 'express'
import cors from 'cors'
import router from './Router/router.js'
import { mongooseConnection } from './Config/config.js'
const port = 4000

const app = express()
mongooseConnection()
app.use(express.json({
    limit: '50mb', extended: true
}))
app.use(cors())



app.use('/api', router)


app.listen(port, () => { console.log(`server running on port number ${port}`) })