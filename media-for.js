const notas = [10, 6.6, 8, 7.5];

let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i];
}

if (notas.length) {
  const media = somaDasNotas / notas.length
  console.log(`A média das notas é ${media}`);
} else {
  console.log('Não há notas cadastradas');
}

