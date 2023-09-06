


const cliente = {
    nome : 'André',
    idade : 32,
    cpf : '12345',
    email : 'andre@gmail.com',
}

console.log(`O nome do cliente é ${cliente['nome']}`);


const chaves = ['nome', 'idade', 'cpf', 'email']

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)

})