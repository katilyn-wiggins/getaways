const { Router } = require('express');

const Place = require('../models/Place');

module.exports = Router()
  .get('/', async (req, res, next) => {
    const limit = req.query.limit || 10;
    const page = req.query.page || 1;
    const offset = (page - 1) * limit;
    const totalPlaces = await Place.estimatedDocumentCount();
    //manually creating pagination in API by using methods skip and limit
    const places = await Place.find()
      .skip(Number(offset))
      .limit(Number(limit))
      .exec();
    res.json({ places, totalPlaces });
  })
  .get('/:id', async (req, res, next) => {
    const place = await Place.findOne({ _id: req.params.id });
    res.json(place);
  });
