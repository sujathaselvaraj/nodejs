var fs = require('fs');
var content = 'Tom and Jerry are very good Friends';
var writeStream = fs.createWriteStream('movies.txt');
writeStream.write(content, 'Utf-8');
writeStream.end();
writeStream.on('finish', function () {
    console.log('Content written to the file');
});
writeStream.on('error', function (err) {
    console.log(`ERROR!!! ${err.stack}`);
});
console.log('End.......');