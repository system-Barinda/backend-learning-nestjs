const express = require("express");
const router = express.Router();

const itemController = require("../controllers/itemController");

const validate = require("../middleware/validation");

const {
  validateCreateItem,
  validateUpdateItem,
  validateItemId,
} = require("../validators/itemValidator");

router.get("/", itemController.getAllItems);

router.post(
  "/",
  validateCreateItem,
  validate,
  itemController.createItem
);

router.put(
  "/:id",
  validateUpdateItem,
  validate,
  itemController.updateItem
);

router.delete(
  "/:id",
  validateItemId,
  validate,
  itemController.deleteItem
);

export default router;