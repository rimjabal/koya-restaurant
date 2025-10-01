const express = require('express');
const router = express.Router();
const {
  getMenuItems,
  getMenuItem,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
  getMenuItemsByCategory,
  getSpecialMenuItems
} = require('../controllers/menuController');

// Get all menu items and create new menu item
router
  .route('/')
  .get(getMenuItems)
  .post(createMenuItem);

// Get, update, and delete a single menu item
router
  .route('/:id')
  .get(getMenuItem)
  .put(updateMenuItem)
  .delete(deleteMenuItem);

// Get menu items by category
router.route('/category/:categoryName').get(getMenuItemsByCategory);

// Get special menu items
router.route('/specials').get(getSpecialMenuItems);

module.exports = router;
