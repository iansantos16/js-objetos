
const clientes = require("./clientes.json");

function encontrar (lista, chave, valor){
    return lista.find((item)=> item[chave] .includes(valor))
};

const encontrado = encontrar(clientes, 'nome', 'Kirby');

const encontrado2 = encontrar(clientes, 'telefone', '9466883489');

console.log(encontrado2);