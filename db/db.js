const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost3306',
  user: 'root',
  password: '',
  database: 'employee_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Export the pool
module.exports = pool.promise();