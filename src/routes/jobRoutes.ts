import { Router } from 'express';
import { createJob, getAllJobs, getJobById, updateJob, deleteJob, healthCheck } from '../controllers/jobController';

const router = Router();

router.get('/', healthCheck);
// POST /jobs: Create a new job posting
router.post('/jobs', createJob);

// GET /jobs: Retrieve all postings
router.get('/jobs', getAllJobs);

// GET /jobs/:id: Retrieve a single posting by ID
router.get('/jobs/:id', getJobById);

// PUT /jobs/:id: Update a posting by ID
router.put('/jobs/:id', updateJob);

// DELETE /jobs/:id: Delete a posting by ID
router.delete('/jobs/:id', deleteJob);

export default router;