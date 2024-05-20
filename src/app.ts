import express from 'express';
import userRoutes from './routes/userRoutes';
import streamDataRoutes from './routes/streamDataRoutes';

const app = express();

app.use(express.json());
app.use('/api', userRoutes);
app.use('/stream', streamDataRoutes);

export default app;