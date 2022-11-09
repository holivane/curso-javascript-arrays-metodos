const alunos = ["Juliana", "João", "Maria", "Marta"];
const notas = [10, 6.5, 7, 8];

const listaAlunosNotas = [alunos, notas];

console.log(listaAlunosNotas);

function exibeNomeENota(nome) {
  if (listaAlunosNotas[0].includes(nome)) {
    const indice = listaAlunosNotas[0].indexOf(nome);
    const nota = listaAlunosNotas[1][indice];
    console.log(`A média de ${nome} é ${nota}.`);
  } else {
    console.log(`${nome} não está no cadastro`);
  }
}

exibeNomeENota("João");
exibeNomeENota("Maria");
exibeNomeENota("Holivane");
exibeNomeENota("Marta");
exibeNomeENota("Alexandre");
