require('dotenv').config();
const express = require('express');
const cors = require('cors');
const admin = require('./firebaseConfig');
const meditationRoutes = require('./routes/meditationRoutes'); // Import routes

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hindi Meditation App Server is running!');
});

// Use meditation routes
app.use('/api/meditations', meditationRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
