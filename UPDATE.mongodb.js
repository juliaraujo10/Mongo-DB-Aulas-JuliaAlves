/* DEFINE O NOME DO BANCO DE DADOS */
// const database = 'libri-database';

// ACESSA O BANCO DE DADOS libri-database
// use ('libri-database');

/* UPDATE ONE */
db['libri-collection'].updateOne(
    {titulo:'As Cavernas de Aço'},
    {
        $set:{valor: 250}
    }
);

// ACESSA O BANCO DE DADOS libri-database
use ('libri-database');
/* UPDATE MANY */
db['libri-collection'].updateMany(
    {categoria: 'Ficção Científica'},
    {
        $set:{valor: 250}
    }
);