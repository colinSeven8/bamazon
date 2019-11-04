let mysql = require('mysql');
let inquirer = require('inquirer');
let Table = require('cli-table');

// Globals
let table = new Table({
    head: ['PRODUCT ID', 'PRODUCT NAME', 'DEPARTMENT', 'PRICE', 'QUANTITY'],
    colWidths: [100, 200]
});

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'bamazon_db'
});

connection.connect(function (err) {
    if (err) throw err;
    promptUserInput();
});

function readAndDisplayProducts() {

    let query = "SELECT * FROM products";
    connection.query(query, function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            table.push(
                { id: res[i].item_id },
                { name: res[i].product_name },
                { dept: res[i].department_name },
                { price: res[i].price },
                { quantity: res[i].stock_quantity }
            );
            console.log(table.toString());
        }
        promptUserInput();
    });
}

function promptUserInput() {
    inquirer.prompt(
        {
            type: "input",
            name: "ID",
            msg: "What is the ID of the product you would like to buy?"
        },
        {
            type: "input",
            name: "QUANTITY",
            msg: "How many would you like to purchase?"
        }).then(function (answer) {

            for (let i = 0; i < table.length; i++) {
                if (answer.ID === table[i].id && answer.QUANTITY >= table[i].quantity) {
                    let total = (table[i].price * answer.QUANTITY).toFixed(2);
                    console.log('\nThank you for your purchase! Your total is $' + total + '\n');
                    connection.end();
                } else {
                    console.log("Please check the item number and quantity again...");
                }
            }
        });
}