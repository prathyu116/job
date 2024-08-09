const express = require('express');
const { createJob, getJobs, getJobById, updateJob, deleteJob, filterByLocation, filterByIndustry, filterByJobType } = require('../controllers/jobController');
const router = express.Router();

router.post('/', createJob);
router.get('/', getJobs);
router.post('/location', filterByLocation);
router.post('/industry', filterByIndustry);
router.post('/jobType', filterByJobType);
router.get('/:id', getJobById);
router.put('/:id', updateJob);
router.delete('/:id', deleteJob);

module.exports = router;
