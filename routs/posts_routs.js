const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.send('Posts server');
});  

router.post('/', (req, res) => {
    res.send('Posts server- post');
}); 
 

module.exports = router;