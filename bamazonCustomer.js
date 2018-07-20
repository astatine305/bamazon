var mysql = require('mysql');
var inquire = require('inquirer');
var table = require('console.table');
var myTable = [];
var productChoice = [];

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
  });

//   connection.connect();

function customer(){
    var query = "SELECT * FROM products ORDER BY product_name";
    connection.query(query, function(err, res) {
    if(err) {
        console.log(err);
        return;
    }
    for (i = 0; i< res.length; i++) {
        // Push values into an array to use console.table formatting
        myTable.push({
            'Product name': res[i].product_name, 
            'Department name': res[i].department_name, 
            'Price': res[i].price, 
            'Stock Qty': res[i].stock_quantity
        });   
        productChoice.push(res[i].product_name);
    }
    console.table(myTable);
    wouldBuy();
      });
    };
      
//Prompt customer to buy   
function wouldBuy() {
    inquire.prompt({
        type: 'list',
        name: 'wouldBuy',
        message: 'Welcome to bamazon, would you like to buy something?',
        choices: [
            'Yes',
            'No'
            ]
    }).then(function(answer){
        if (answer.wouldBuy === 'Yes') {
            whichBuy();
            }
            console.log("Thank you for visiting bamazon!");
        });
    };  
customer();

function whichBuy() {
    inquire.prompt([
        {
          type: 'list',
          name: 'whichBuy',
          message: 'Which product would you like to buy?',
          choices: productChoice
        },
        {
            type: 'input',
            name: 'howMany',
            message: 'How many would you like to buy?'
        }

]).then(function(answer){
          var query = "UPDATE PRODUCTS SET STOCK_QUANTITY = STOCK_QUANTITY - "
          + answer.howMany + " WHERE product_name = "+"'"+ answer.whichBuy+"'";
          connection.query(query, function(err, res){
              if(err) {
                  console.log(err);
                  return;
                  console.log("product purchased!");
              }
              
          });
          moreBuy();
        
    })
}

function moreBuy() {
    inquire.prompt({
        type: 'list',
        name: 'moreBuy',
        message: 'Would you like to buy something else?',
        choices: [
            'Yes',
            'No'
        ]
    }).then(function(answer){
        if (answer.moreBuy === 'Yes') {
          whichBuy();
        }
      console.log("Thank you for visiting bamazon!");
    });

}