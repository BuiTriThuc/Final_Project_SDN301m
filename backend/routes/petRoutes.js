const express = require("express");
const {
  getAllLostFoundPet,
  getLostFoundPetDetails,
  createLostFoundPet,
  myPets,
  getAdminPet,
  updateLostFoundPet,
  deleteLostFoundPet,
  updatePetAdmin,
} = require("../controllers/petController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/pets").get(getAllLostFoundPet);
router.route("/pet/new").post(isAuthenticatedUser, createLostFoundPet);
router.route("/pet/:id").get(getLostFoundPetDetails);
router.route("/pet/user/update/:id").put(isAuthenticatedUser, updateLostFoundPet);
router.route("/pet/admin/update/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateLostFoundPet);
router.route("/pet/delete/:id").delete(isAuthenticatedUser, deleteLostFoundPet);
router.route("/admin/pet/update/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updatePetAdmin)
router.route("/lost-found").get(getAllLostFoundPet);
router.route("/pets/me").get(isAuthenticatedUser, myPets);
router.route("/admin/pets").get(isAuthenticatedUser, authorizeRoles("admin"), getAdminPet);

module.exports = router;
