const database = require('../models');

class LivroController {
    static async getLivros(req, res) {
        try {
            const listaDeLivros = await database.Livro.findAll();
            return res.status(200).json(listaDeLivros);
        } catch (erro) {
            return res.status(500).json({ message: erro.message })
        }
    }

    static async getLivroByPK(req, res) {
        const id = req.params.id;
        try {
            const livroEncontrado = await database.Livro.findByPk(id);
            return res.status(200).json(livroEncontrado);
        } catch (erro) {
            return res.status(500).json({ mensagem: erro.message });
        }
    }

    static async createLivro(req, res) {
        const novoLivro = req.body;
        try {
            const novoLivroCriado = await database.Livro.create(novoLivro);
            res.status(200).json({
                message: 'Livro Criado', novoLivro: novoLivroCriado
            });
        } catch (erro) {
            res.status(500).json({ message: erro.message })
        }
    }

    static async updateLivro(req, res) {
        const id = req.params.id;
        const novaInfo = req.body;
        try {
            await database.Livro.update(novaInfo, {
                where: { id: Number(id) }
            });
            const livroAtualizado = await database.Livro.findByPk(id);
            res.status(200).json(livroAtualizado);
        } catch (erro) {
            res.status(500).json({ message: erro.message })
        }
    }

    static async deleteLivro(req, res) {
        const { id } = req.params;
        try {
            await database.Livro.destroy({ where: { id: Number(id) } });
            res.status(200).json({ mensagem: `ID ${id} deletado` });
        } catch (erro) {
            res.status(500).json({ mensagem: erro.message });
        }
    }
}

module.exports = LivroController;
