const express = require('express');
const app = express();
app.use(express.json());
const taskRoutes = require('./routes/tasks.js');
const PORT = process.env.PORT || 3000;

app.use('/api', taskRoutes);

app.listen(PORT, () => {
  console.log('Server Listening on PORT:', PORT);
});
