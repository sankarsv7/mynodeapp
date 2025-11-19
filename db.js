// db.js
//local connection
/*const mysql = require('mysql2/promise');

// OPTION 1 — Using socket (works on macOS Homebrew MySQL)
const pool = mysql.createPool({
  socketPath: '/tmp/mysql.sock',
  user: 'root',
  password: 'MyPass123!!',
  database: 'MyTestDB',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
*/
//AWS connection
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "mytestdb.cazmoykck1cr.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "MyPass123!!",
    database: "MyTestDB",
    port: 3306
});
db.connect(err => {
    if (err) {
        console.error("DB connection error:", err);
        return;
    }
    console.log("Connected to AWS RDS!");
});

module.exports = db;