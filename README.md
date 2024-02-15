# Employee Tracker

Employee Tracker is a command-line application built with Node.js, Inquirer, and MySQL. It allows business owners to view and manage departments, roles, and employees in their company, facilitating organization and business planning.

## Features

- View all departments, roles, and employees
- Add departments, roles, and employees
- Update employee roles
- Clean and user-friendly command-line interface

## Installation

1. Clone the repository: git clone https://github.com/Tatro009/employee-tracker.git
2. Navigate to the project directory: cd employee-tracker
3. Install dependencies: npm install
4. Set up your MySQL database and update the connection configuration in db/db.js.
5. Run the application: node app.js

## Usage

Upon running the application, you will be presented with a menu where you can choose from various options:

View all departments
View all roles
View all employees
Add a department
Add a role
Add an employee
Update an employee role
Exit

Follow the prompts to perform desired actions and manage your employee database effectively.

## Database Schema
The application expects a MySQL database with the following schema:

department table

id: INT PRIMARY KEY
name: VARCHAR(30) to hold department name
role table

id: INT PRIMARY KEY
title: VARCHAR(30) to hold role title
salary: DECIMAL to hold role salary
department_id: INT to hold reference to department role belongs to
employee table

id: INT PRIMARY KEY
first_name: VARCHAR(30) to hold employee first name
last_name: VARCHAR(30) to hold employee last name
role_id: INT to hold reference to employee role

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

