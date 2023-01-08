import express from 'express'
import  router  from './routes'

const app = express()

app.get('/', (req, res) => {
    console.log('hello from express')
    res.status(200)
    res.json({message: 'Hello'})
})

app.use('/api', router)

export default app