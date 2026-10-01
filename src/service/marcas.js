import Marcas from '../model/marcas.js';

class ServiceMarcas {

    Buscar() {
        return Marcas.Buscar();
    }

    BuscarUm(id) {
        if (!id || isNaN(id)) {
            throw new Error('ID inválido');
        }
        return Marcas.BuscarUm(id);
    }

    Criar(marca) {
        if(!marca) {
            throw new Error('Marca inválida');
        }
        Marcas.Criar(marca);
    }

    Atualizar(id, marca) {
        if (!id || isNaN(id) || !marca) {
            throw new Error('ID e marca inválidos');
        }
        Marcas.Atualizar(id, marca);
    }

    Eliminar(id) {
        if (!id || isNaN(id)) {
            throw new Error('ID inválido');
        }
        Marcas.Eliminar(id);
    }

}

export default new ServiceMarcas();