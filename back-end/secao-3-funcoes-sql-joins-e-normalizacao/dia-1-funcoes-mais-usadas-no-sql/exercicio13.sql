SELECT
    employee_id,
    first_name,
    YEAR(hire_date) AS 'hire_year'
FROM
    hr.employees;