SELECT
    COUNT(*)
FROM
    store.sales
WHERE
    DATE(order_date) BETWEEN '2018-04-15'
    AND '2019-07-30';