import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

interface JobAttributes {
    id: string;
    title: string;
    company: string;
    location: string;
    salary?: number;
    description?: string;
    created_at?: Date;
}

class Job extends Model<JobAttributes> implements JobAttributes {
    public id!: string;
    public title!: string;
    public company!: string;
    public location!: string;
    public salary!: number;
    public description!: string;
    public created_at!: Date;
}

Job.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        company: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        salary: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        tableName: 'jobs',
        timestamps: false,
    }
);

export default Job;