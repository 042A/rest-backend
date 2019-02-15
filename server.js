const express = require('express');
const bodyParser = require('body-parser');
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: '89b156df',
  apiSecret: 'lr91eIDMgVsGNl7j'
});
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const server = app.listen(3000);

nexmo.message.sendSms(
    '042A', '46739683434', 'Live web test 2',
      (err, responseData) => {
        if (err) {
          console.log(err);
        } else {
          console.dir(responseData);
        }
      }
   );