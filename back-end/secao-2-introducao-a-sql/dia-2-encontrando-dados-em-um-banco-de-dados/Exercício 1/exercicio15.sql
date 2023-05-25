SELECT
    CONCAT(
        'Existem ',
        COUNT(*),
        ' cientistas na tabela Scientists.'
    )
FROM
    Scientists.Scientists;