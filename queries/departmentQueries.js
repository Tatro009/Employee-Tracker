const db = require('../db/db');

// Function to get all departments from the database
async function getAllDepartments() {
    try {
        const [rows, fields] = await db.query('SELECT * FROM department');
        return rows;
    } catch (error) {
        console.error('Error fetching departments:', error);
        return [];
    }
}

// Function to add a department to the database
async function addDepartment(name) {
    try {
        const [result] = await db.query('INSERT INTO department (name) VALUES (?)', [name]);
        return result;
    } catch (error) {
        console.error('Error adding department:', error);
        throw error; // Rethrow the error to handle it in the calling function
    }
}

// Export both functions together
module.exports = {
    getAllDepartments,
    addDepartment
};
