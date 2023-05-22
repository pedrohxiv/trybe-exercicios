SELECT
    employee_id,
    first_name,
    MONTH(hire_date) AS 'hire_month'
FROM
    hr.employees;