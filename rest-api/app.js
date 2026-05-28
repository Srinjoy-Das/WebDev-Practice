const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.send('Hello World!');
})

const start = async () => {
    try{
        app.listen(PORT, () => {
            console.log(`${PORT} I am Connected`);
        });
    }
    catch(error){
        console.log(error);
    }
}

start();