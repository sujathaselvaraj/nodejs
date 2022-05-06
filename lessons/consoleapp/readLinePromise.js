const readline = require('readline-promise').default;
const r1p = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true,
});
let bar = null;
r1p.questionAsync('What is your name').then((answer) => {
    bar = answer;
console.log('Welcome:' + bar);
});
console.log('\n After');

/**read */