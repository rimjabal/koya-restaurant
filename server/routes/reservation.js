const express = require('express');
const router = express.Router();
const {
  createReservation,
  getReservations,
  getReservation,
  updateReservationStatus,
  deleteReservation
} = require('../controllers/reservationController');

// Routes
router.route('/')
  .post(createReservation)
  .get(getReservations);

router.route('/:id')
  .get(getReservation)
  .delete(deleteReservation);

router.route('/:id/status')
  .patch(updateReservationStatus);

module.exports = router;
