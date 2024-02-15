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

// Export the functions
module.exports = {
    getAllRoles
};