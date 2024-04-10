const database = require('../models');

class AutorController {
    static async getAutores(req, res) {
        try {
            const listaDeAutores = await database.Autor.findAll();
            return res.status(200).json(listaDeAutores);
        } catch (erro) {
            return res.status(500).json({ message: erro.message });
        }
    }

    static async getAutorByPK(req, res) {
        const id = req.params.id;
        try {
            const autorEncontrado = await database.Autor.findByPk(id);
            return res.status(200).json(autorEncontrado);
        } catch (erro) {
            return res.status(500).json({ mensagem: erro.message });
        }
    }

    static async createAutor(req, res) {
        const novoAutor = req.body;
        try {
            const novoAutorCriado = await database.Autor.create(novoAutor);
            res.status(200).json({
                message: 'Autor Criado',
                novoAutor: novoAutorCriado
            });
        } catch (erro) {
            res.status(500).json({ message: erro.message });
        }
    }

    static async updateAutor(req, res) {
        const id = req.params.id;
        const novaInfo = req.body;
        try {
            await database.Autor.update(novaInfo, {
                where: { id: Number(id) }
            });
            const autorAtualizado = await database.Autor.findByPk(id);
            res.status(200).json(autorAtualizado);
        } catch (erro) {
            res.status(500).json({ message: erro.message });
        }
    }

    static async deleteAutor(req, res) {
        const { id } = req.params;
        try {
            await database.Autor.destroy({ where: { id: Number(id) } });
            res.status(200).json({ mensagem: `ID ${id} deletado` });
        } catch (erro) {
            res.status(500).json({ mensagem: erro.message });
        }
    }
}

module.exports = AutorController;
