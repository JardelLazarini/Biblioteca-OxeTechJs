const { Router } = require('express');
const LivroController = require('../controllers/LivroController.js');

const router = Router();

router.get('/livros', LivroController.getLivros);
router.get('/livros/:id', LivroController.getLivroByPK);
router.put('/livros/:id', LivroController.updateLivro);
router.post('/livros', LivroController.createLivro);
router.delete('/livros/:id', LivroController.deleteLivro);

module.exports = router;
