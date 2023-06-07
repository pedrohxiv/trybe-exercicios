def count_good_combinations(products):
    count = 0
    n = len(products)
    for i in range(n):
        for j in range(i + 1, n):
            if products[i] == products[j]:
                count += 1
    return count

# Complexidade de Tempo: O(n²)
