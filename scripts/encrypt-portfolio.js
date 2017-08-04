const fs = require( 'fs' );
const path = require( 'path' );

const encryptor = require( 'simple-encryptor' )( 'showmetheportfoliooooooo!' );

const filename = '/Users/westmark/projects/sansmint/sansmint.com/build/static/js/protected-portfolio.js.222ee010.chunk.js';
const data = fs.readFileSync( filename );
const str = encryptor.encrypt( data );
fs.writeFileSync( filename, str );
