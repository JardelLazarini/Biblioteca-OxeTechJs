const database = require('../models');

class EditoraController {
    static async getEditoras (req, res) {
        try{
            const allEditoras = await database.Editora.findAll();
            res.status(200).json(allEditoras);

        } catch (erro) {
            res.status(500).json({ message: erro.message });
        }}

    static async getByPkEditora (req, res) {
        const id = req.params.id;
        try {
            const editoraEncontrada = await database.Editora.findByPk(id);
            res.status(200).json(editoraEncontrada);
        } catch (erro) {
            res.status(500).json({ message: erro.message });
        }
    }
    
    static async createEditora (req, res) {
        const novaEditora = req.body;
        try {
            const novaEditoraCriada = await database.Editora.create(novaEditora);
            res.status(200).json({message: 'Editora criada', novaEditora: novaEditoraCriada});
        

        } catch (erro) {
            res.status(500).json({ message: erro.message });
        }
    }

    static async updateEditora (req, res) {
        const id = req.params.id;
        const updatingEditora = req.body;
        try {
            const updatedEditora = await database.Editora.update(updatingEditora, {where: {id: Number(id)}});
            res.status(200).json(updatedEditora);
        } catch (erro) {
            res.status(500).json({ message: erro.message });
        }
    }

    static async deleteEditora (req, res) {
        const id = req.params.id;
        try {
            await database.Editora.destroy({where: {id: Number(id)}});
            res.status(200).json({message: `Editora com o ID ${id} deletada com sucesso`});
        } catch (erro) {
            res.status(500).json({ message: erro.message });
        }
    }
}

module.exports = EditoraController;