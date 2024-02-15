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

async function addEmployee(firstName, lastName, roleId) {
    try {
        const [result] = await db.query('INSERT INTO employee (first_name, last_name, role_id) VALUES (?, ?, ?)', [firstName, lastName, roleId]);
        return result;
    } catch (error) {
        console.error('Error adding employee:', error);
        throw error; // Rethrow the error to handle it in the calling function
    }
}

// Export the addEmployee function
module.exports = {
    getAllEmployees,
    addEmployee
};