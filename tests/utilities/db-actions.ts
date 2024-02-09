// const sql = require("mssql/msnodesqlv8");   // need to install (msnodesqlv8) library using this command "npm install mssql --save" and "npm install msnodesqlv8@^2" or "npm install msnodesqlv8 --save"
const mysql = require('mysql2'); //need to install (mysql2) library using this command "npm install mysql2"

// create a new MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER!, //'root',
  password: process.env.DB_PWD!, //'',
  database: 'mysql'
});

// connect to the MySQL database
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to MySQL database:', error);
  } else {
    console.log('Connected to MySQL database!');
  }
});

// pass the query statement and run it then close the connection
function runQuery(statement) {
    return new Promise((resolve, reject) => {
        connection.query(statement, (err, result) => {
            if (err) throw err
            connection.end(); // close the MySQL connection
            return resolve(result);
        })
    });
}

// var p  = runQuery("SELECT Host from user;"); 
//             p.then((data)=>{ // promise and callback function
//             console.log('data :', data); // result
//             console.log("END");
//             });

// close the MySQL connection
// connection.end();

export default runQuery;