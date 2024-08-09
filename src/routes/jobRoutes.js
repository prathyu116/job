const express = require('express');
const { createJob, getJobs, getJobById, updateJob, deleteJob,filterByLocation } = require('../controllers/jobController');
const router = express.Router();

router.post('/', createJob);
router.get('/', getJobs);
router.get('/location', filterByLocation);

router.get('/:id', getJobById);
router.put('/:id', updateJob);
router.delete('/:id', deleteJob);

module.exports = router;
