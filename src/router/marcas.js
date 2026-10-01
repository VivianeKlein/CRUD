import express from 'express';

import ControllerMarcas from '../controller/marcas.js';

const router = express.Router();

router.get('/buscar', ControllerMarcas.Buscar);
router.get('/buscarUm/:id', ControllerMarcas.BuscarUm);
router.post('/criar', ControllerMarcas.Criar);
router.put('/atualizar/:id', ControllerMarcas.Atualizar);
router.delete('/eliminar/:id', ControllerMarcas.Eliminar);

export default router;