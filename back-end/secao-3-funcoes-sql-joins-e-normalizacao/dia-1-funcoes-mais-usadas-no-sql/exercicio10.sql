SELECT
    department_id,
    AVG(salary) AS 'average_salary',
    COUNT(*) AS 'number_of_employees'
FROM
    hr.employees
GROUP BY
    department_id
HAVING
    number_of_employees > 10;