const express = require("express");
const { route } = require("express/lib/application");
const {
  newOrderService,
  getSingleOrderService,
  myOrdersService,
  getAllOrdersService,
  updateOrderService,
  deleteOrderService,
} = require("../controllers/orderController");
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/service/new").post(isAuthenticatedUser, newOrderService);
router
  .route("/service/:id")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getSingleOrderService);
router.route("/services/me").get(isAuthenticatedUser, myOrdersService);
router
  .route("/admin/services")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrdersService);
router
  .route("/admin/service/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateOrderService)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrderService);

module.exports = router;
