import app from './app.js'
import dbConnection from './config/dbConnection.js'

dbConnection()

app.listen(8000,()=>{
    console.log(`Server started at port 8000`)
})