import express from 'express';
import mongoose from 'mongoose';
import { studentRouter } from './routes/studentRouter.js';

//conectando ao mongoDB Atlas
( async () => {
  try {
    await mongoose.connect('mongodb+srv://jsoares:junior1104@bootcamp-igti.v5erz.mongodb.net/grades?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });

    console.log('Conectado ao MongoDB Atlas');
  } catch (error) {
    console.log('Erro ao conectar no MongoDB Atlas ' + error)
  }
})();

//configurando o servidor web (API)
const app = express();
app.use(express.json());
app.use(studentRouter);
app.listen(process.env.PORT || 3000, () => console.log('API Iniciada'));