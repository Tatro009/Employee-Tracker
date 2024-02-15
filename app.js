const inquirer = require('inquirer');
const { getAllDepartments, addDepartment } = require('./queries/departmentQueries');
const { getAllRoles, addRole } = require('./queries/roleQueries');
const { getAllEmployees, addEmployee, updateEmployeeRole } = require('./queries/employeeQueries');

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
                'Add a department',
                'Add a role',
                'Add an employee',
                'Update an employee role',
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
            case 'Add a department':
                promptAddDepartment();
                break;
            case 'Add a role':
                promptAddRole();
                break;
            case 'Add an employee':
                promptAddEmployee();
                break;
            case 'Update an employee role':
                promptUpdateEmployeeRole();
                break;
            case 'Exit':
                console.log('Goodbye!');
                process.exit(0);
        }
    });
}

// Function to handle "View all departments" action
function viewAllDepartments() {
    getAllDepartments()
        .then(departments => {
            console.log('\nAll Departments:\n');
            console.table(departments);
            mainMenu();
        })
        .catch(error => {
            console.error('Error viewing departments:', error);
            mainMenu();
        });
}

// Function to handle "View all roles" action
function viewAllRoles() {
    getAllRoles()
        .then(roles => {
            console.log('\nAll Roles:\n');
            console.table(roles);
            mainMenu();
        })
        .catch(error => {
            console.error('Error viewing roles:', error);
            mainMenu();
        });
}

// Function to handle "View all employees" action
function viewAllEmployees() {
    getAllEmployees()
        .then(employees => {
            console.log('\nAll Employees:\n');
            console.table(employees);
            mainMenu();
        })
        .catch(error => {
            console.error('Error viewing employees:', error);
            mainMenu();
        });
}

// Function to handle "Add a department" action
function promptAddDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the name of the department:'
        }
    ]).then(answer => {
        addDepartment(answer.name)
            .then(() => {
                console.log('Department added successfully!');
                mainMenu();
            })
            .catch(error => {
                console.error('Error adding department:', error);
                mainMenu();
            });
    });
}

// Function to handle "Add a role" action
function promptAddRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of the role:'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter the salary for the role:'
        },
        {
            type: 'input',
            name: 'departmentId',
            message: 'Enter the department ID for the role:'
        }
    ]).then(answer => {
        const { title, salary, departmentId } = answer;
        addRole(title, salary, departmentId)
            .then(() => {
                console.log('Role added successfully!');
                mainMenu();
            })
            .catch(error => {
                console.error('Error adding role:', error);
                mainMenu();
            });
    });
}

// Function to handle "Add an employee" action
function promptAddEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'Enter the first name of the employee:'
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'Enter the last name of the employee:'
        },
        {
            type: 'input',
            name: 'roleId',
            message: 'Enter the role ID for the employee:'
        }
    ]).then(answer => {
        const { firstName, lastName, roleId} = answer;
        addEmployee(firstName, lastName, roleId)
            .then(() => {
                console.log('Employee added successfully!');
                mainMenu();
            })
            .catch(error => {
                console.error('Error adding employee:', error);
                mainMenu();
            });
    });
}

// Function to handle "Update an employee role" action
function promptUpdateEmployeeRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter the ID of the employee to update:'
        },
        {
            type: 'input',
            name: 'roleId',
            message: 'Enter the new role ID for the employee:'
        }
    ]).then(answer => {
        const { employeeId, roleId } = answer;
        updateEmployeeRole(employeeId, roleId)
            .then(() => {
                console.log('Employee role updated successfully!');
                mainMenu();
            })
            .catch(error => {
                console.error('Error updating employee role:', error);
                mainMenu();
            });
    });
}

// Start the application by displaying the main menu
mainMenu();


