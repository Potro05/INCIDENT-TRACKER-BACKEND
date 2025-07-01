const Incident = require('../models/Incident');

module.exports = {
  async getAllIncidents(req, res) {
    try {
      const incidents = await Incident.findAll();
      res.json(incidents);
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de la récupération des incidents.' });
    }
  },

  async createIncident(req, res) {
    try {
      const incident = await Incident.create(req.body);
      res.status(201).json(incident);
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la création de l’incident.' });
    }
  },

  async updateIncident(req, res) {
    try {
      const { id } = req.params;
      const [updated] = await Incident.update(req.body, { where: { id } });
      if (updated) {
        const incident = await Incident.findByPk(id);
        res.json(incident);
      } else {
        res.status(404).json({ error: 'Incident non trouvé.' });
      }
    } catch (error) {
      res.status(400).json({ error: 'Erreur lors de la mise à jour de l’incident.' });
    }
  }
};
