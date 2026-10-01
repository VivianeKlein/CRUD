import ServiceMarcas from "../service/marcas.js";

class ControllerMarcas {

    Buscar(req, res) {
        try {
            const marcas = ServiceMarcas.Buscar();
            res.send({ marcas });
        } catch (error) {
            res.send({ error: error.message });
        }
    }

    BuscarUm(req, res) {
        try {
            const id = req.params.id;
            const marca = ServiceMarcas.BuscarUm(id);
            res.send({ marca });
        } catch (error) {
            res.send({ error: error.message });
        }
    }

    Criar(req, res) {
        try {
            const marca = req.body.marca;
            ServiceMarcas.Criar(marca);
            res.send({ message: 'Marca criada com sucesso' });
        } catch (error) {
            res.send({ error: error.message });
        }
    }

    Atualizar(req, res) {
        try {
            const id = req.params.id;
            const marca = req.body.marca;
            ServiceMarcas.Atualizar(id, marca);
            res.send({ message: 'Marca atualizada com sucesso' });
        } catch (error) {
            res.send({ error: error.message });
        }
    }

    Eliminar(req, res) {
        try {
            const id = req.params.id;
            ServiceMarcas.Eliminar(id);
            res.send({ message: 'Marca eliminada com sucesso' });
        } catch (error) {
            res.send({ error: error.message });
        }
    }

}

export default new ControllerMarcas();