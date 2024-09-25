
import { use } from './routes/userRoutes';
const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    // Conexión a MongoDB usando variables de entorno para la seguridad
    await mongoose.connect(`mongodb+srv://${process.env.BD_NOMBRE}:${process.env.BD_PASSWORD}@cluster0.vbavo.mongodb.net/chatFolira?retryWrites=true&w=majority&appName=Cluster0`);
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
    process.exit(1); // Detener la aplicación si hay un error
  }
};

connectDB();
