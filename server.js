const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');  // Only this line should remain
const authRoutes = require('./routes/authRoutes');
const app = express();

// Middleware
app.use(express.json());
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

// MongoDB connection (replace with your connection string)
mongoose.connect('mongodb+srv://user-10:V3Ey8xsvCOukI67e@cluster0.uiupj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((err) => console.log('MongoDB connection error:', err));

// Routes
app.use('/auth', authRoutes);

// Start server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
