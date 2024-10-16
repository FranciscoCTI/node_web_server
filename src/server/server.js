import express from 'express'
import path from 'path'

export const startServer = (options) => {
    const{port, public_path = 'public'} = options
    
    const app = express()

    app.use(express.static(public_path))

    app.get('/',(req,res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })

    app.get('/contacto',(req,res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/contacto.html`)
        res.sendFile(indexPath)
        console.log('Ha accedido a la página de contacto')
    })

    app.listen(port, () => {
        console.log(`Escuchando el puerto ${port}`)
    })
}
