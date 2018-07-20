var mysql = require('mysql');
var inquire = require('inquirer');


var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'bamazon'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
var askQuestion = function() {
      // runs inquirer and asks the user a series of questions whose replies are
      // stored within the variable answers inside of the .then statement
      inquirer.prompt([
        {
            type: 'rawlist',
            name: "All Products",
        }, 
        {
            type: 'rawlist',
            name: "Low Inventory",
        }, 
        {
            type: 'rawlist',
            name: "Add Product",
        }
      ]).then(function(answers) {
        // initializes the variable newProgrammer to be a programmer object which will take
        // in all of the user's answers to the questions above
        var newProgrammer = new Programmer(
          answers.name,
          answers.position,
          answers.age,
          answers.language);
        // printInfo method is run to show that the newProgrammer object was successfully created and filled
        newProgrammer.printInfo();
        // add one to count to increment our recursive loop by one
        count++;
        // run the askquestion function again so as to either end the loop or ask the questions again
        askQuestion();
      });
      // else statement which prints "all questions asked" to the console
      // when the code has been run five times
  
  };



connection.end();

