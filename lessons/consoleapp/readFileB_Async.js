// Load the fs (fileSystem) module
var fs = require('fs');
console.log('Start reading a file...')
// REad the contents of the File into memory
fs.readFile('phonebook.dat', function (err, contactData) {
    // If an err occurred, throwing it will
    // display the exception and end our app 
    if (err) {
        console.log(`ERROR!!! ${err}`);
        return console.log(err); //throw err
    } 
    var text = contactData.toString();
    let myfunc = function() {
        console.log('INSIDE readFILE');
    };
    setTimeout(myfunc, 3000);

    //Break up the file into lines
    var lines = text.split('\n');
    lines.forEach(function (line) {
        var parts = line.split(' ');
        var name = parts[0];
        var phone = parts[2];
        console.log(name + ' - ' +phone);
    });
});
console.log('end of the file');

