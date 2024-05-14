/* SELECIONA LIVROS COM VALOR MAIOR QUE 100 REAIS */
use ('libri-database');
db['libri-collection'].find({valor: {$gt:100}});

/* SELECIONA LIVROS COM VALOR MENOR QUE 100 REAIS */
use ('libri-database');
db['libri-collection'].find({valor: {$lt:100}});

/* SELECIONA LIVROS COM VALOR MAIOR OU IGUAL QUE 100 REAIS */
use ('libri-database');
db['libri-collection'].find({valor: {$gte:100}});

/* SELECIONA LIVROS COM VALOR MENOR OU IGUAL QUE 100 REAIS */
use ('libri-database');
db['libri-collection'].find({valor: {$lte:100}});

/* SELECIONA LIVROS ENTRE UM INTERVALO DE VALORES DE 100 ATÉ 150 */
use ('libri-database');
db['libri-collection'].find({valor: {$gte:100, $lte:150}});

/* SELECIONA LIVROS ENTRE UM INTERVALO DE VALORES DE 100 ATÉ 150  - ORDENAÇÃO CRESCENTE*/
use ('libri-database');
db['libri-collection'].find({valor: {$gte:100, $lte:150}}).sort({valor:1});

/* SELECIONA LIVROS ENTRE UM INTERVALO DE VALORES DE 100 ATÉ 150  - ORDENAÇÃO DECRESCENTE*/
use ('libri-database');
db['libri-collection'].find({valor: {$gte:100, $lte:150}}).sort({valor:-1});

/* SELECIONA LIVROS ENTRE UM INTERVALO DE VALORES DE 100 ATÉ 150  - ORDENAÇÃO DECRESCENTE*/
use ('libri-database');
db['libri-collection'].find({valor: {$gte:100, $lte:150}},{"_id":0, "codigo":0}).sort({valor:-1});
