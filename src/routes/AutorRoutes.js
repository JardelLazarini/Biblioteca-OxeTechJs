const { Router } = require('express');
const AutorController = require('../controllers/AutorController');

const router = Router();

router.get('/autores', AutorController.getAutores);
router.get('/autores/:id', AutorController.getAutorByPK);
router.put('/autores/:id', AutorController.updateAutor);
router.post('/autores', AutorController.createAutor);
router.delete('/autores/:id', AutorController.deleteAutor);

module.exports = router;
