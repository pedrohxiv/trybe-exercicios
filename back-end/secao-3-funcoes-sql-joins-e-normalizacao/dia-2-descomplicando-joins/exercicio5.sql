SELECT
    t.id,
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    pixar.theater AS `t`
    RIGHT JOIN pixar.movies AS `m` ON t.id = m.theater_id
ORDER BY
    t.name;