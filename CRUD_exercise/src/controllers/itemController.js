const fileService = require('../services/fileService');
const {v4:uuidv4} = require('uuid')

const itemController = {
    async getAllItem(req,res){
      try{
        const items = await fileService.readItem();
        res.status(200).json(items)
      }
      catch(error){
        res.status(500).json({ error: 'Failed to retrieve items.' });
      }
    },

    async createItem(req, res) {
    try {
      const { name, price } = req.body; 
      if (!name) {
        return res.status(400).json({ error: 'Name field is required.' });
      }

      const items = await fileService.readItems();
      
      const newItem = {
        id: Date.now().toString(), 
        name,
        price: price || 0
      };

      items.push(newItem);
      await fileService.writeItems(items);

      res.status(201).json(newItem); 
    } catch (error) {
      res.status(500).json({ error: 'Failed to create item.' });
    }
  },
}