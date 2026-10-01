const marcas = new Array("Ford", "Chevrolet", "Toyota", "Honda", "Nissan");

class Marcas {

    Buscar() {
        return marcas;
    }

    BuscarUm(id) {
        return marcas[id];
    }

    Criar(marca) {
        marcas.push(marca);
    }

    Atualizar(id, marca) {
        marcas[id] = marca;
    }

    Eliminar(id) {
        marcas.splice(id, 1);
    }

}

export default new Marcas();