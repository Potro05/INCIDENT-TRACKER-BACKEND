const express = require('express');
const router = express.Router();
const IncidentController = require('../controllers/IncidentController');

router.get('/', IncidentController.getAllIncidents);
router.post('/', IncidentController.createIncident);
router.put('/:id', IncidentController.updateIncident);

module.exports = router;
