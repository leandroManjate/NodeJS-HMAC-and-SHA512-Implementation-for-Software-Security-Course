const crypto = require ("crypto");
const fs = require('fs');


try {
    // ler o ficheiro que vamos autenticar
    const data = fs.readFileSync('mensagem_professor.txt','utf-8');
    console.log('\nVamos autenticar este texto: ',data);
    
    // para autenticar com HMAC é necessária uma chave secreta partilhada
    // que foi disponibilizada neste ficheiro
    const chavePartilhada = fs.readFileSync('chave_secreta_partilhada.txt','utf-8');
    console.log('\nUsando a chave partilhada: ',chavePartilhada);

    // agora vamos calcular um HMAC com aquela chave partilhada
    const hmac = crypto.createHmac('sha256', chavePartilhada);
    hmac.update(data);
    const hmacResult=hmac.digest('hex');
    console.log('\nO HMAC calculado é: ',hmacResult);

    // vamos ler o autenticador HMAC que o professor enviou
    const hmacRecebido=fs.readFileSync('hmac.hex', 'utf-8');
    console.log('\nO HMAC recebido é: ',hmacRecebido);

    // e agora comparar os dois
    // se forem iguais, significa que a mensagem é autêntica e não foi alterada
    if (hmacResult == hmacRecebido) {
        console.log("\nA mensagem é autêntica !")
    }
    else {
        console.log("\nCuidado, a mensagem não é autêntica !")
    }
    
}
 catch (err) {
    console.error(err);
 }  