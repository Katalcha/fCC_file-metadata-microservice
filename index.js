require('dotenv').config()
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', (_, res) => res.sendFile(process.cwd() + '/views/index.html'));



app.listen(process.env.PORT || 3000, () => console.log('Your app is listening on port ' + process.env.PORT));
