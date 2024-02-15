const db = require('../db/db');

// Function to get all roles from the database
async function getAllRoles() {
    try {
        const [rows, fields] = await db.query('SELECT * FROM role');
        return rows;
    } catch (error) {
        console.error('Error fetching roles:', error);
        return [];
    }
}

// Function to add a role to the database
async function addRole(title, salary, departmentId) {
    try {
        const [result] = await db.query('INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [title, salary, departmentId]);
        return result;
    } catch (error) {
        console.error('Error adding role:', error);
        throw error; // Rethrow the error to handle it in the calling function
    }
}

// Export both functions together
module.exports = {
    getAllRoles,
    addRole
};
