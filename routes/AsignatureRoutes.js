// routes/asignatureRoutes.js

const express = require('express');
const router = express.Router();
const asignatureController = require('../controllers/AsignatureController');

// Obtener todas las asignaturas
router.get('/asignatures', asignatureController.getAllAsignatures);

// Crear una nueva asignatura
router.post('/asignatures', asignatureController.createAsignature);

// Otros endpoints CRUD según sea necesario

module.exports = router;
