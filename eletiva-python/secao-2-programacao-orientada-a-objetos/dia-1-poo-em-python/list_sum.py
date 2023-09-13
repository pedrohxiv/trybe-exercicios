from typing import List


def list_sum(values: List[int]) -> int:
    total = 0

    for value in values:
        total += value

    return total


print(list_sum([1, 2, 3, 4, 5]))
