require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

const useRouter = require('./routes/user.js');

const posts = [
  { username: 'Jim', title: 'post1' },
  { username: 'Zhe', title: 'post2' },
];

app.get('/', (req, res) => {
  console.log('hi');
  res.json({ message: 'err' });
});

app.get('/posts', (req, res) => {
  res.json(posts);
});

app.use('/user', useRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
