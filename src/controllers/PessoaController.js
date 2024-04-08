const database = require('../models');

class PessoaController {
    static async getLivros(req, res) {
        try {
            const listaDeLivros = await database.Livros.findAll();
            return res.status(200).json(listaDeLivros);
        } catch (erro) {
            //Mensagem de erro
        }
    }
}

module.exports = PessoaController;