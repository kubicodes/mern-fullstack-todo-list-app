const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();

//DB Connection
try {
  mongoose.connect(
    process.env.MONGODB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    () => console.log('Connected to DB')
  );
} catch (error) {
  console.log('Could not connect to DB', error);
}

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//CORS
app.use(cors());

//
const todo_routes = require('./routes/api');
app.use('/api/v1/todos', todo_routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is starting at ${PORT}`);
});
