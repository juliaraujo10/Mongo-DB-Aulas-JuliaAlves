/* DEFINE O NOME DO BANCO DE DADOS */
// const database = 'libri-database';

// ACESSA O BANCO DE DADOS libri-database
// use ('libri-database');

/* DELETE ONE */
db['libri-collection'].deleteOne(
    {codigo: '5',}
);

// ACESSA O BANCO DE DADOS libri-database
use ('libri-database');

/* DELETE MANY */
db['libri-collection'].deleteMany(
    {categoria: 'Fantasia Heroica'}
);