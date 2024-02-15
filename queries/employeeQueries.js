const db = require('../db/db');

// Function to get all employees from the database
async function getAllEmployees() {
    try {
        const [rows, fields] = await db.query('SELECT * FROM employee');
        return rows;
    } catch (error) {
        console.error('Error fetching employees:', error);
        return [];
    }
}

// Export the functions
module.exports = {
    getAllEmployees
};