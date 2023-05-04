import express from 'express'
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json());


app.get('/', (req, res) => {
  res.send('Welcome to my API');
})

app.listen(4000, () => {console.log('Api running...😎 on port 4000')})