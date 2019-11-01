let mysql = require('mysql');
let inquirer = require('inquirer');

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'bamazon_db'
});

connection.connect(function(err) {
    if (err) throw err;
    promptUserInput();
});

function promptUserInput() {
    inquirer.prompt({
        type: "list",
        name: "menu",
        msg: "What would like to do?",
        choice: [
            "a",
            "b",
            "c"
        ]
    }).then(function(answer) {

    });
}