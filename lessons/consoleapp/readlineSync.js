var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I know YOur NAme? ');
console.log('Hi ' + userName + '!');
var favFood = readlineSync.question('What is ur FAvorite food? ',{
    hideEchoBack: true,
});
console.log('Oh, ' + userName + ' loves ' + favFood + '!');
console.log('After');