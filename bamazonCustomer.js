let mysql = require('mysql');
let inquirer = require('inquirer');
let Table = require('cli-table');

// Globals
let table = new Table({
    head: ['PRODUCT ID', 'PRODUCT NAME', 'DEPARTMENT', 'PRICE', 'QUANTITY'],
    colWidths: [15, 30, 30, 10, 10]
});

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'bamazon_db'
});

connection.connect((err) => {
    if (err) throw err;
    readAndDisplayProducts();
});

function readAndDisplayProducts() {

    let query = "SELECT * FROM products";
    connection.query(query, (err, res) => {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            table.push(
                [res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]
            );
        }
        console.log(table.toString());
        promptUserInput();
    });
}

const validateResponse = async (val) => {
    if (val.toLowerCase() === "q") process.exit();
    return val > 0;
}

function promptUserInput() {
    inquirer.prompt([
        {
            type: "input",
            name: "ID",
            message: "What is the ID of the product you would like to buy?",
            validate: validateResponse
        },
        {
            type: "input",
            name: "QUANTITY",
            message: "How many would you like to purchase?",
            validate: validateResponse
        }]).then((answer) => {
            let found = false;
            for (let key in table) {
                if ((answer.ID * 1) === table[key][0] && (answer.QUANTITY * 1) <= table[key][4]) {
                    found = true
                    let totalCost = (table[key][3] * answer.QUANTITY).toFixed(2);
                    let newQuantity = table[key][4] - answer.QUANTITY;
                    console.log('\nThank you for your purchase! Your total is $' + totalCost + '\n');
                    connection.end();
                }
            }
            if (!found) console.log("Please check the item number and quantity again...");
            found = false;
            promptUserInput();
        });
}