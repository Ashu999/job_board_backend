import express from 'express';
import jobRoutes from './routes/jobRoutes';

const app = express();
app.use(express.json());

app.use(jobRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`); // Log server start
});
