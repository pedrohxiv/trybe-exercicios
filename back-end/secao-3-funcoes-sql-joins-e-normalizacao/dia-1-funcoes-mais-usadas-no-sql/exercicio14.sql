SELECT
    employee_id,
    first_name,
    DAY(hire_date) AS 'hire_day'
FROM
    hr.employees;