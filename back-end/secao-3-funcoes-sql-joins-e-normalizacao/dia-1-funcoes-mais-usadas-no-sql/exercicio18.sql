SELECT
    first_name,
    last_name,
    DATEDIFF(CURRENT_TIME(), hire_date) AS 'days_work'
FROM
    hr.employees;