

const cliente = {
    nome : 'André',
    idade : 32,
    cpf : '12345',
    email : 'andre@gmail.com',
}

console.log(`O nome do cliente é ${cliente.nome}`);

console.log(`Os 3 primeiros dígitos do cpf são : ${cliente.cpf.substring(0,3)}`)