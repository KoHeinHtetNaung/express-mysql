import express from 'express';
import cors from 'cors';
import db from './models/index.js';
import setupRoute from './routes/user-route.js';

const app = express();
const port = process.env.PORT || 8080;
var corsOptions = {
  origin: 'http://localhost:8081',
}

app.use(cors(corsOptions));
app.use(express.json())

app.use(express.urlencoded({ extended: true}));

db.sequelize.sync()
  .then(() => console.log('Database connected successfully.'))
  .catch((err) => console.error('Error connecting to the database:', err));

setupRoute(app);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});