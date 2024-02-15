-- Insert some sample departments
INSERT INTO department (name) VALUES
    ('Engineering'),
    ('Sales'),
    ('Marketing');

-- Insert some sample roles
INSERT INTO role (title, salary, department_id) VALUES
    ('Software Engineer', 80000.00, 1),
    ('Sales Associate', 50000.00, 2),
    ('Marketing Coordinator', 60000.00, 3);

-- Insert some sample employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
    ('Luke', 'Skywalker', 1, NULL),
    ('Han', 'Solo', 2, 1),
    ('Leia', 'Organa', 3, 1);