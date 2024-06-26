const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./db');
const cors = require('cors');

app.use(cors());  // connect backend and fontend
app.use(express.json());  //parses incoming requests with JSON payloads. 


const signupRoute = require('./routes/userRoutes');
app.use('/auth', signupRoute);  

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
