const express = require('express');
const app = express();

app.use(
    express.urlencoded({
        extended:true,
    }),
)
app.use(express.json())
//ednpoits - rotas
app.get('/', (req,res)=>{
    res.json({messege:' rota express'})
})


app.listen(3000)