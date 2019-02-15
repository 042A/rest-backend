const express = require('express');
var port = process.env.PORT || 3000;
const app = express();

app.listen(port, () => {
    console.log('Server is running');
});
