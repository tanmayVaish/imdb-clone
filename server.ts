import express from 'express';
import authRouter from './routes/auth'
import cookieParser from 'cookie-parser';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", authRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});