SELECT
    m.id,
    m.title,
    m.director,
    m.year,
    m.length_minutes,
    m.theater_id
FROM
    pixar.movies AS `m`
    INNER JOIN pixar.box_office AS `b` ON b.movie_id = m.id
WHERE
    b.rating > 8
    AND m.theater_id IS NOT NULL;