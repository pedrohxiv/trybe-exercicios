SELECT
    m.title,
    b.rating
FROM
    pixar.movies AS `m`
    INNER JOIN pixar.box_office AS `b` ON b.movie_id = m.id
ORDER BY
    b.rating DESC;