#  Suivi des Incidents - Backend (Jurassic Park)

Ce projet est une API REST construite avec **Node.js**, **Express** et **MySQL**.  
Elle permet de **déclarer**, **lister** et **mettre à jour** des incidents techniques ou de sécurité dans un parc thématique de dinosaures (Jurassic Park ).

---

## ⚙️ Fonctionnalités principales

- ✅ Création d’un incident (`POST /api/incidents`)
- ✅ Visualisation de tous les incidents (`GET /api/incidents`)
- ✅ Mise à jour du statut (`PUT /api/incidents/:id`)
- ✅ Sauvegarde MySQL avec Sequelize ORM
- ✅ Conteneurisation Docker (à venir)
- ✅ Déploiement Kubernetes (à venir)
- ✅ Documentation Swagger (à venir)

---

##  Technologies utilisées

| Outil | Usage |
|-------|-------|
| Node.js / Express | Backend / API REST |
| Sequelize         | ORM pour MySQL     |
| MySQL             | Base de données    |
| Docker            | Conteneurisation (à venir) |
| Kubernetes        | Orchestration (à venir) |
| Swagger UI        | Documentation API (à venir) |

---

##  Installation

### 1. Cloner le projet
```bash
git clone https://github.com/Potro05/INCIDENT-TRACKER-BACKEND.git
cd INCIDENT-TRACKER-BACKEND
