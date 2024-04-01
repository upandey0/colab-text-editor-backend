import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import userrouter from './router/userRoute.js'
import documnetRouter from './router/documentRouter.js'

const app = express()

app.use(cookieParser())
app.use(express.json())
app.use(cors())
// app.use(express.urlencoded())

app.use('/', userrouter)
app.use('/document',documnetRouter)

// app.get('/', (req,res)=>{
//     res.send('Hello There')
// })

export default app;
