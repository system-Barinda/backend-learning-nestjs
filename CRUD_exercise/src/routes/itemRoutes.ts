import itemController from "../controllers/itemController"; 
import validate from "../middleware/validation";

import { validateCreateItem, validateUpdateItem, validateItemId} from "../validators/itemValidator";

const express = require("express");
const router = express.Router();



router.get("/", itemController.getAllItems);

router.get(
      "/:id", 
      validateItemId, 
      validate, itemController.getOneById)
      ;

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