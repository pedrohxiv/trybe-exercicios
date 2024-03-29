from random import shuffle
from Cronometro import Cronometro


def selection_sort(array):
    for i in range(len(array)):
        min_index = i
        for j in range(i + 1, len(array)):
            if array[j] < array[min_index]:
                min_index = j
        array[min_index], array[i] = array[i], array[min_index]
    return array


def insertion_sort(array):
    for i in range(len(array)):
        current_value = array[i]
        current_position = i
        while (
            current_position > 0
            and array[current_position - 1] > current_value
        ):
            array[current_position] = array[current_position - 1]
            current_position -= 1
        array[current_position] = current_value
    return array


for algorithm in (insertion_sort, selection_sort):
    algorithm_name = algorithm.__name__
    for input in (10_000, 100_000, 1_000_000):
        sorted_numbers = list(range(input))
        reversed_sorted_numbers = list(reversed(sorted_numbers))
        random_numbers = sorted_numbers[:]
        shuffle(random_numbers)
        with Cronometro(f"{algorithm_name} com entrada" +
                        f" ordenada de {input} números"):
            algorithm(sorted_numbers)
        with Cronometro(f"{algorithm_name} com entrada" +
                        f" inversamente ordenada de {input} números"):
            algorithm(reversed_sorted_numbers)
        with Cronometro(f"{algorithm_name} com entrada" +
                        f" aleatória de {input} números"):
            algorithm(random_numbers)
        print("-" * 100)
