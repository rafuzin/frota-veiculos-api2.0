import express from 'express'
import VeiculoRouter from './routes/veiculo.routes.js'

const server = express()
server.use(express.json())

server.use('/veiculos', VeiculoRouter)

server.listen(3000, () => {
    console.log('o server está rodando http://localhost:3000')
})