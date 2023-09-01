const express = require('express');
const router = express.Router();
const cntrlmain=require('../controllers/other.js');
const ctrllocations =require('../controllers/locations');
/* GET home page. */
router.get('/other',cntrlmain.about);
router.get('/location',ctrllocations.locationinfo);
router.get('/location/review/new',ctrllocations.addreview);
router.get('/about',cntrlmain.about);
module.exports=router;




