//importar a dependencia do sqlite3

const sqlite3 = require("sqlite3").verbose(); //para o sqlite3 mostrar msg, escritas, falar...

//criar o objeto que irá fazer operações no banco de dados

const db = new sqlite3.Database("./src/database/database.db"); //new retorna um objeto; o caminho é para criar um novo arquivo

module.exports = db

//utilizar o objeto para nossas operações

db.serialize(() => {
//     //criar uma tabela com comandos SQL
//     //usa crases pq assim da para quebrar a linha
//     // criar uma tabela se ela não existir com estes campos. Os id's serão únicos e autoincrementados, aumentando automaticamente quanto mais dados forem inseridos
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)

//     //inserir dados
//     //inserir nos 'places' os valores
//     const query = `
//         INSERT INTO places (
//             image, name, address, address2, state, city, items
//         ) VALUES (?,?,?,?,?,?,?);
//     `
    
//     const values = [
//         "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
//         "Papersider",
//         "Guilherme Gemballa, Jardim América",
//         "Nº 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Resíduos Eletrônicos, Lâmpadas"
//     ];

//     function afterInsertData(err) {

//         if(err) {                               //se houver erro, falar o erro
//             return console.log(err);
//         };
//         console.log("Cadastrado com sucesso");  //se não houver erro
//         console.log(this);

//     }

//     db.run(query, values, afterInsertData);  //se colocar os parenteses no nome da função, ela vai ser executada imediatamente, e não queremos isto
    
// //consultar dados da tabela
    
    // db.all(`SELECT * FROM places`, function(err, rows) {   //para acessar os dados, rows é a lista do registro
    //                                                         // * significa todos, mas podia ser name para trazer só os nomes

    //     if(err) {                             
    //         return console.log(err);
    //     }

    //     console.log("Aqui estão seus registros: ");
    //     console.log(rows);

    // });

//deletar dados da tabela

    // db.run(`DELETE FROM places  where id = ?`, [5], function(err){
    
    //     if(err) {                             
    //         return console.log(err);
    //     }
    //     console.log("Registro deletado com sucesso");
    
    // })

})