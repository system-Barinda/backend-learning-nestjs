const fileService = require("../services/fileService");

const itemController = {
  async getAllItems(req, res) {
    try {
      const items = await fileService.readItems();
      res.status(200).json(items);
    } catch (error) {
      console.error("The actual GET error is:", error);
      res.status(500).json({
        error: "Failed to retrieve items.",
      });
    }
  },

  async createItem(req, res) {
    try {
      const { name, price } = req.body;

      const items = await fileService.readItems();

      const newItem = {
        id: Date.now().toString(),
        name,
        price: price || 0,
      };

      items.push(newItem);

      await fileService.writeItems(items);

      res.status(201).json(newItem);
    } catch (error) {
      console.error("The actual hidden error is:", error);
      res.status(500).json({
        error: "Failed to create item.",
      });
    }
  },

  async updateItem(req, res) {
    try {
      const { id } = req.params;
      const { name, price } = req.body;

      const items = await fileService.readItems();

      const itemIndex = items.findIndex(
        (item) => item.id === id
      );

      if (itemIndex === -1) {
        return res.status(404).json({
          error: "Item not found.",
        });
      }

      items[itemIndex] = {
        ...items[itemIndex],
        ...(name !== undefined && { name }),
        ...(price !== undefined && { price }),
      };

      await fileService.writeItems(items);

      res.status(200).json(items[itemIndex]);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "Failed to update item.",
      });
    }
  },

  async deleteItem(req, res) {
    try {
      const { id } = req.params;

      const items = await fileService.readItems();

      const itemExists = items.some(
        (item) => item.id === id
      );

      if (!itemExists) {
        return res.status(404).json({
          error: "Item not found.",
        });
      }

      const filteredItems = items.filter(
        (item) => item.id !== id
      );

      await fileService.writeItems(filteredItems);

      res.status(200).json({
        message: "Item deleted successfully.",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "Failed to delete item.",
      });
    }
  },
};

module.exports = itemController;