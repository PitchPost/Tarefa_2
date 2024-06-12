function calcularRank(vitorias, derrotas) {

    let saldoVitorias = vitorias - derrotas;

  
    let nivel;
    let found = false;
    let i = 0;

    do {
        switch (true) {
            case (vitorias < 10):
                nivel = "Ferro";
                found = true;
                break;
            case (vitorias >= 11 && vitorias <= 20):
                nivel = "Bronze";
                found = true;
                break;
            case (vitorias >= 21 && vitorias <= 50):
                nivel = "Prata";
                found = true;
                break;
            case (vitorias >= 51 && vitorias <= 80):
                nivel = "Ouro";
                found = true;
                break;
            case (vitorias >= 81 && vitorias <= 90):
                nivel = "Diamante";
                found = true;
                break;
            case (vitorias >= 91 && vitorias <= 100):
                nivel = "Lendário";
                found = true;
                break;
            case (vitorias >= 101):
                nivel = "Imortal";
                found = true;
                break;
            default:
                nivel = "Indeterminado";
                found = true;
        }
        i++;
    } while (!found);

 
    return { saldoVitorias, nivel };
}


function exibirResultado(vitorias, derrotas) {
    const resultado = calcularRank(vitorias, derrotas);
    console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
}


const vitorias = 120;
const derrotas = 10;
exibirResultado(vitorias, derrotas);