const express = require('express');// Create App
const app     = express();
const PORT    = process.env.PORT || 1337;

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
    console.log('Express is running on ' + PORT + ' port');
});
