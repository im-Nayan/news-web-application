const express = require('express');
const route = express.Router();
const Controller = require('../Controller/controller')

route.get('/', Controller.home)
route.get('/sports', Controller.sports)
route.get('/technology', Controller.technology)
route.get('/health', Controller.health)
route.get('/international', Controller.international)
route.get('/entertainment', Controller.entertainment)
route.get('/country', Controller.country)
route.get('/business', Controller.business)
route.get('/science', Controller.science)



module.exports = route;