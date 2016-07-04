import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config.js';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.listen(config.PORT, () => {
  console.log('listening on port: ' + config.PORT);
});
