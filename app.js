const inquirer = require('inquirer');
const { getAllDepartments } = require('./queries/departmentQueries');
const { getAllRoles } = require('./queries/roleQueries');
const { getAllEmployees } = require('./queries/employeeQueries');

// Function to display main menu and prompt user for action
function mainMenu() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View all departments',
                'View all roles',
                'View all employees',
                'Exit'
            ]
        }
    ]).then(answer => {
        switch (answer.action) {
            case 'View all departments':
                viewAllDepartments();
                break;
            case 'View all roles':
                viewAllRoles();
                break;
            case 'View all employees':
                viewAllEmployees();
                break;
            case 'Exit':
                console.log('Goodbye!');
                process.exit(0);
        }
    });
}

// Function to handle "View all departments" action
async function viewAllDepartments() {
    try {
        const departments = await getAllDepartments();
        console.log('\nAll Departments:\n');
        console.table(departments);
    } catch (error) {
        console.error('Error viewing departments:', error);
    }
    mainMenu(); // Go back to main menu
}

// Function to handle "View all roles" action
async function viewAllRoles() {
    try {
        const roles = await getAllRoles();
        console.log('\nAll Roles:\n');
        console.table(roles);
    } catch (error) {
        console.error('Error viewing roles:', error);
    }
    mainMenu(); // Go back to main menu
}

// Function to handle "View all employees" action
async function viewAllEmployees() {
    try {
        const employees = await getAllEmployees();
        console.log('\nAll Employees:\n');
        console.table(employees);
    } catch (error) {
        console.error('Error viewing employees:', error);
    }
    mainMenu(); // Go back to main menu
}

// Start the application by displaying the main menu
mainMenu();

