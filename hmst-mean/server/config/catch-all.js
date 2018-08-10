const router = require('express').Router();
const path = require('path');

router.all('*', (request, response) => {
  response.sendFile(path.join(__dirname, '../../dist/hmst-mean/index.html'));
});

module.exports = router;
