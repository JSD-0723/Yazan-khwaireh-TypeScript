import express, {Request , Response } from 'express';
import bookRoutes from "./routes/bookRoutes";
import sequelize from './db/connection';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/books', bookRoutes);




app.use((err: any, req: Request, res: Response, next: any) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});


(async () => {
    try {
        await sequelize.authenticate(); // Check the database connection
        console.log('Database connection has been established successfully.');

        // Synchronize models with the database. This will create tables if they don't exist.
        // await sequelize.sync({ force: true });
        await sequelize.sync();
        
        app.listen(5000, () => {
            console.log('Server is listening on port 5000...');
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();
