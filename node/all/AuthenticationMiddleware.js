const express = require('express');
const app = express();

function logger(req, res, next) {
    console.log(`Request URL: ${req.url} Request Type: ${req.method}`);
    next();
}

function authenticate(req, res, next) {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).send('Unauthorized: No token provided');
    }

    const token = authHeader.split(' ')[1];

    if (token === 'barinda') {
        req.user = {
            id: 123,
            username: 'john'
        };
        next();
    } else {
        res.status(403).send('Invalid token');
    }
}

app.use(logger);

app.get('/api/protected', authenticate, (req, res) => {
    res.json({
        message: 'Protected data',
        user: req.user
    });
});


function validateUserCreation(req, res, next) {
  const { username, email, password } = req.body;
  

  if (!username || username.length < 3) {
    return res.status(400).json({ error: 'Username must be at least 3 characters' });
  }
  
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email is required' });
  }
  
  if (!password || password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters' });
  }
  

  next();
}


app.post('/api/users', validateUserCreation, (req, res) => {

  res.status(201).json({ message: 'User created successfully' });
});

app.listen(8080, () => {
    console.log('Server running on port 8080');
});