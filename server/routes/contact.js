const express = require('express');
const router = express.Router();

// Placeholder controller function until we implement it fully
const sendContactMessage = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Message sent successfully',
    data: req.body
  });
};

// Routes
router.route('/').post(sendContactMessage);

module.exports = router;
