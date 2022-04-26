
const http = require('http');

http.createServer( ( req,res ) => {

    // res.setHeader('Content-Disposition', 'attachment; filename=list.csv');
    // res.writeHead(200, { 'Content-Type': 'application/cvs' });

    res.write(' Hola mundo');
    // res.write('1, jaime\n');
    // res.write('2, dani\n');
    // res.write('3, fer\n');
    res.end();

})
.listen( 8080 );

console.log('escucho el puerto', 8080);

