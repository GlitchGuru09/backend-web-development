const express = require('express');
const app = express();

const port = 3000;

//middlewares
app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
  })

app.use((req, res, next) => {
    console.log('another Time:', Date.now())
    next()
  })



//routes
app.get('/', function(req,res){
    res.send('learning express.js');
})

app.get('/profile', function(req,res,next){
    return next(new Error('something went wrong!'));
})

//error handling 
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })

//server 
app.listen(port, function(err) {
    if (err) {
        console.error('Error starting server:', err);
        return;
    }
    console.log(`Server is listening on port ${port}`);
});
