const express = require('express')
const app = express();

app.get('/',(req, res) => {
    res.json({
        messsage: "Hello User", 
        success: true
    })
})


app.use('/api/v1/auth', require('./routes/Auth.js'))

app.listen(4000, () => {
    console.log('project is running on port : 4000')
})