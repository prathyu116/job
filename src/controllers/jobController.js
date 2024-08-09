const Job = require('../models/job.model');

const createJob = async (req, res) => {
    try {
        const newJob = new Job(req.body);
        const savedJob = await newJob.save();
        res.status(201).json(savedJob);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getJobById = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        res.status(200).json(job);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateJob = async (req, res) => {
    try {
        const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedJob);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteJob = async (req, res) => {
    try {
        await Job.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const filterByLocation = async (req, res) => {
    try {
        const { location } = req.body;
        const jobs = await Job.find({ location });
        res.status(200).json(jobs);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const filterByIndustry = async (req, res) => {
    try {
        const { industry } = req.body;
        const jobs = await Job.find({ industry });
        res.status(200).json(jobs);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const filterByJobType = async (req, res) => {
    try {
        const { jobType } = req.body;
        const jobs = await Job.find({ jobType });
        res.status(200).json(jobs);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};


module.exports = { createJob, getJobs, getJobById, updateJob, deleteJob, filterByLocation, filterByIndustry, filterByJobType };
