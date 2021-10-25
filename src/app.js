import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import admin from 'firebase-admin';
import { sites, projects } from './routes/index';
import { STATUS_CODE_UNAUTHORIZED } from './common/constants';

require('dotenv').config();

const app = express();
const serviceAccount = require('../vizsite-56474-firebase-adminsdk-nkw2x-917582bee5.json');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.FIREBASE_DATABASE_URL,
});

const db = admin.firestore();

app.use(async (req, res, next) => {
  try {
    const accessToken = req.headers.authorization.split('Bearer ')[1];
    const decodedToken = await admin.auth().verifyIdToken(accessToken);
    req.user = decodedToken;
    next();
  } catch (err) {
    res.status(STATUS_CODE_UNAUTHORIZED).json({ error: 'Unauthorized' });
  }
});

app.use((req, res, next) => {
  req.db = db;
  next();
});

app.use('/sites', sites);
app.use('/projects', projects);

app.listen(process.env.PORT, () => {
  console.log('Express server listening on port 3001');
});
