import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();
// parser
app.use(express.json());
app.use(cors());
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Express server is running!',
  });
});
export default app;
