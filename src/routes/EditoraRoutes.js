const {Router} = require('express');
const EditoraController = require('../controllers/EditoraController');

const route = Router();

route.get('/editoras', EditoraController.getEditoras);
route.get('/editoras/:id', EditoraController.getByPkEditora);
route.post('/editoras', EditoraController.createEditora);
route.put('/editoras/:id', EditoraController.updateEditora);
route.delete('/editoras/:id', EditoraController.deleteEditora);

module.exports = route;