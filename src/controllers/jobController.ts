import { Request, Response, RequestHandler } from 'express';
import Job from '../models/job';
import { v4 as uuidv4 } from 'uuid';
import { createApiResponse } from '../utils/apiUtils';


export const healthCheck: RequestHandler = (req: Request, res: Response): void => {
    res.status(200).json(createApiResponse('success', 200, { status: 'healthy' }));
};

export const createJob: RequestHandler = async (req: Request, res: Response): Promise<void> => {

    const requiredFields = ['title', 'company', 'location', 'salary', 'description'];
    const missingFields = requiredFields.filter(field => !req.body[field]);

    if (missingFields.length > 0) {
        res.status(400).json(createApiResponse('error', 400, undefined, 'Missing required fields', `Please provide the following fields: ${missingFields.join(', ')}`));
        return;
    }

    const jobWithId = { ...req.body, id: uuidv4() };

    try {
        const job = await Job.create(jobWithId);
        res.status(201).json(createApiResponse('success', 201, job));
    } catch (error) {
        res.status(500).json(createApiResponse('error', 500, undefined, 'Failed to create job posting', 'An error occurred while creating the job.'));
    }
};

// Retrieve all job postings
export const getAllJobs: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const jobs = await Job.findAll();
        res.status(200).json(createApiResponse('success', 200, jobs));
    } catch (error) {
        res.status(500).json(createApiResponse('error', 500, undefined, 'Failed to retrieve job postings', 'An error occurred while retrieving jobs.'));
    }
};

// Retrieve a single job posting by ID
export const getJobById: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const job = await Job.findByPk(req.params.id);
        if (!job) {
            res.status(404).json(createApiResponse('error', 404, undefined, 'Job posting not found', 'No job found with the provided ID.'));
            return;
        }
        res.status(200).json(createApiResponse('success', 200, job));
    } catch (error) {
        res.status(500).json(createApiResponse('error', 500, undefined, 'Failed to retrieve job posting', 'An error occurred while retrieving the job.'));
    }
};

// Update a job posting by ID
export const updateJob: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const job = await Job.findByPk(req.params.id);
        if (!job) {
            res.status(404).json(createApiResponse('error', 404, undefined, 'Job posting not found', 'No job found with the provided ID.'));
            return;
        }
        await job.update(req.body);
        res.status(200).json(createApiResponse('success', 200, job));
    } catch (error) {
        res.status(500).json(createApiResponse('error', 500, undefined, 'Failed to update job posting', 'An error occurred while updating the job.'));
    }
};

// Delete a job posting by ID
export const deleteJob: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const job = await Job.findByPk(req.params.id);
        if (!job) {
            res.status(404).json(createApiResponse('error', 404, undefined, 'Job posting not found', 'No job found with the provided ID.'));
            return;
        }
        await job.destroy();
        res.status(200).json(createApiResponse('success', 200, undefined, undefined, 'Job posting deleted successfully.'));
    } catch (error) {
        res.status(500).json(createApiResponse('error', 500, undefined, 'Failed to delete job posting', 'An error occurred while deleting the job.'));
    }
};