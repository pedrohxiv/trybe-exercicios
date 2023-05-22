SELECT
    m.title,
    b.domestic_sales,
    b.international_sales
FROM
    pixar.movies AS `m`
    INNER JOIN pixar.box_office AS `b` ON b.movie_id = m.id;