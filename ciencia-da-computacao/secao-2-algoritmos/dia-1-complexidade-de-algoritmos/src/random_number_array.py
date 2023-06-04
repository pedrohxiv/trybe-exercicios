"""A ordem de complexidade de tempo deste algoritmo é O(1)
e a complexidade de espaço é O(n)"""


import random


def random_number_array(n):
    array = []
    for _ in range(100):
        numbers = [random.random() for _ in range(n)]
        average = sum(numbers) / len(numbers)
        array.append(average)
    return array
