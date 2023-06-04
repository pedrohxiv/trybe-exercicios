from random import shuffle
from Cronometro import Cronometro


def bubble_sort(array):
    has_swapped = True
    for num_of_iterations in range(len(array) - 1):
        if not has_swapped:
            break
        has_swapped = False
        for i in range(len(array) - num_of_iterations - 1):
            if array[i] > array[i + 1]:
                array[i], array[i + 1] = array[i + 1], array[i]
                has_swapped = True
    return array


def merge_sort(array):
    if len(array) <= 1:
        return array
    mid = len(array) // 2
    left = merge_sort(array[:mid])
    right = merge_sort(array[mid:])
    merged = merge(left, right)
    return merged


def merge(left, right):
    merged = []
    left_cursor, right_cursor = 0, 0
    while left_cursor < len(left) and right_cursor < len(right):
        if left[left_cursor] <= right[right_cursor]:
            merged.append(left[left_cursor])
            left_cursor += 1
        else:
            merged.append(right[right_cursor])
            right_cursor += 1
    merged.extend(left[left_cursor:])
    merged.extend(right[right_cursor:])
    return merged


for algorithm in [bubble_sort, merge_sort]:
    algorithm_name = algorithm.__name__
    numbers = list(range(10_000))
    shuffle(numbers)
    with Cronometro(algorithm_name):
        algorithm(numbers)
