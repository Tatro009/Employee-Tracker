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

// Export the functions
module.exports = {
    getAllDepartments
};