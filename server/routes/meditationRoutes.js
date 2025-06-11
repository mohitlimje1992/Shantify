const express = require('express');
const router = express.Router();

// Mock Data (will be replaced with Firestore later)
const courses = require('../data/courses');

// @route   GET api/meditations/courses
// @desc    Get all meditation courses
// @access  Public
router.get('/courses', (req, res) => {
  res.json(courses);
});

// @route   GET api/meditations/courses/:courseId
// @desc    Get a single course by ID
// @access  Public
router.get('/courses/:courseId', (req, res) => {
  const course = courses.find(c => c.course_id === req.params.courseId);
  if (!course) {
    return res.status(404).json({ msg: 'Course not found' });
  }
  res.json(course);
});

module.exports = router;
