SELECT
    job_id,
    COUNT(*) AS 'total'
FROM
    hr.employees
WHERE
    job_id = "it_prog";