const express = require('express');
const app = express(); 
const dotenv = require('dotenv').config();
const port = process.env.PORT; 
const mongoose = require('mongoose'); 
const postsRoute = require('./routes/posts_routes'); 
app.use('/posts', postsRoute);  


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
  