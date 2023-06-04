def count_pairs(n):
    if n == 0:
        return 0
    elif n % 2 == 0:
        return 1 + count_pairs(n - 1)
    else:
        return count_pairs(n - 1)
