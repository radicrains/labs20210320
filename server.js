const express = require('express');
const app = express();
const port = 3000;

// app.use(express.urlencoded({extended:false}));



app.get('/test', (req, res)=>{
	res.send('Hello World');
});


app.listen(port, ()=> {
    console.log('Missions to Mars running on port: ', port);
});