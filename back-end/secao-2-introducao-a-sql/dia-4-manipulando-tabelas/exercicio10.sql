DELETE FROM
    pixar.box_office
WHERE
    movie_id IN(1, 6, 7, 8);

DELETE FROM
    pixar.movies
WHERE
    length_minutes < 100;