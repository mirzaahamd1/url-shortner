const express = require("express");
const shortid = require("shortid");
const Url = require("../models/Url");

const Router = express.Router();

Router.post("/shorten", async (req, res) => {
  try {
    const { url } = req.body;
    const shortCode = shortid.generate();

    const newUrl = await Url.create({
      originalUrl: url,
      shortCode,
    });
    res.json({
        message:"url shorten successfully",
      shortUrl: `http://localhost:3000/${shortCode}`,
    });
  } catch (error) {
    res.status(500).json({
        error:error.message
    })
  }
});

Router.get('/:code',async(req,res)=>{
    try {
        const url = await Url.findOne({
            shortCode:req.params.code
        })
        if(!url){
           return res.status(404).send("url not found")
        }
        res.redirect(url.originalUrl)
    } catch (error) {
        res.status(500).json(error.message)
    }

})

module.exports = Router;
