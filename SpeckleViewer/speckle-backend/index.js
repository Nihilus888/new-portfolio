require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const speckleRoutes = require('./routes/speckleRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected!'))
  .catch((err) => console.log('❌ MongoDB connection failed:', err));

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', speckleRoutes);

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));