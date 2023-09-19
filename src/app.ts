import express from 'express';
import bodyParser from 'body-parser';
import bookRoutes from "./routes/bookRoutes"



const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/books', bookRoutes)

app.listen(3000, () => {
    console.log("Server is listening on port 3000!");
})