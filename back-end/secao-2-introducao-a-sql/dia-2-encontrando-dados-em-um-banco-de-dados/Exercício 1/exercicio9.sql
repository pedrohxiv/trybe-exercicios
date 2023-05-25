SELECT
    CONCAT(
        'O Projeto ',
        `Name`,
        ' precisou de ',
        `Hours`,
        ' horas para ser concluído.'
    )
FROM
    Scientists.Projects;