def count_pairs(n):
    counter = 0
    for num in range(n + 1):
        if num % 2 == 0:
            counter += 1
    return counter
