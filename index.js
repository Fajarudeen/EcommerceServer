const express = require('express')

const cors = require('cors')

const dataservice=require('./services/dataservice')

const app = express()

app.use(cors({
    origin:'http://localhost:4200'
}))

// to parse json
app.use(express.json())

app.listen(3000,()=>{
    console.log('server started at port 3000');
})

app.get('/allProducts',(req,res)=>{

    // console.log(req.params);
    // Asynchronous
    dataservice.getProducts()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })

})
