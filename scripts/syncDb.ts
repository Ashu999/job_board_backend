import sequelize from '../src/config/database';
import '../src/models/job';

async function syncDatabase() {
    try {
        await sequelize.sync();
        console.log('Database synchronized successfully');
    } catch (error) {
        console.error('Error synchronizing database:', error);
    } finally {
        await sequelize.close();
    }
}

syncDatabase();