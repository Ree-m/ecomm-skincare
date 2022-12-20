const Item = require('../models/Item')




module.exports = {
    // fetch all items

    getItems: async (req, res) => {
      
        try {
            const items = await Item.find({})
            res.status(200).send(items)
        } catch (err) {
        console.log(err);
      }
    },
    // fetch an item
    getItem: async (req, res) => {
      try {
       const item = await Item.findOne({_id: req.params.id})

       if(!item){
        res.status(404).send({error:"Item not found"})
       }
       res.status(200).send(item)

      } catch (err) {
        console.log(err);
      }
    },
    
    // create item for admin
    createItem: async (req, res) => {
      try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path);
  
        await Item.create({ 
          name: req.body.name,
          image: result.secure_url,
          cloudinaryId: result.public_id,
          description: req.body.caption,
          category: req.body.category,
          price:req.body.price,
          
        });
        console.log("Item has been added!");
        res.redirect("/items");
      } catch (err) {
        console.log(`ERROR${err}`);
      }
    },  
    deleteItem: async (req, res) => {
      try {
        // Find item by id
        let item = await Item.findById({ _id: req.params.id });
        // Delete image from cloudinary
        await cloudinary.uploader.destroy(item.cloudinaryId);
        // Delete post from db
        await Item.remove({ _id: req.params.id });
        console.log("Deleted Item");
        res.redirect("/items");
      } catch (err) {
        res.redirect("/items");
      }
    },
  };
  