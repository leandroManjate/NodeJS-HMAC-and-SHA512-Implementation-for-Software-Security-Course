const crypto = require ("crypto");
const fs = require('fs');


try {
    // ler ficheiro para o qual vamos calcular o hash
    const data = fs.readFileSync('mensagem_professor.txt','utf-8');
    console.log('\nVou calcular o hash sha512 do texto: ',data);
    
    // calcular o hash
    const hash = crypto.createHash('sha512');
    hash.update(data);
    hashResult=hash.copy().digest('hex');

    // mostrar o resultado
    console.log('\nO hash sha512 do texto é: ',hashResult);
    
}
 catch (err) {
    console.error(err);
 }  