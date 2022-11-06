const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
console.log('Alunos matriculados: ', nomes);

nomes.splice(1, 2,'Rodrigo');

console.log(`Alunos matriculados: ${nomes}`);
console.log('Alunos matriculados: ', nomes);