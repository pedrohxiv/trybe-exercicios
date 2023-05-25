SELECT
    Piece,
    Price
FROM
    `PiecesProviders`.`Provides`
ORDER BY
    Price DESC
LIMIT
    5;