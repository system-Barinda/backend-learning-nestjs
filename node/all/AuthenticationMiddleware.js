const express = require('express');
const { el } = require('zod/v4/locales');
const app = express();

function logger(req,res,next){
    console.log(`Request URL: ${req.url} Request Type: ${req.method}`);
    next();
}

function authenticate(req,res,next){
    const authHeader = req.headers['authorization'];

    if(!authHeader ){
        return res.status(401).send('Unauthorized: No token provided');
    }

    const token = authHeader.split('')[1];

    if(token === 'barinda'){
        req.user = { id:123,username:'john'};
        next();
    }
    else{
        res.status(403).send('invalid token');
    }

}


app.get('/api/protected', authenticate, (req, res) => {
  res.json({ message: 'Protected data', user: req.user });
});


app.listen(8080, () => {
  console.log('Server running on port 8080');
});
