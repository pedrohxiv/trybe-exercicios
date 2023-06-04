"""A ordem de complexidade deste algoritmo para o
melhor caso, pior caso e caso médio é O(n log n)"""


def contains_duplicate(numbers):
    numbers.sort()
    previous_number = 'not a number'
    for number in numbers:
        if (previous_number == number):
            return True
        previous_number = number
    return False
