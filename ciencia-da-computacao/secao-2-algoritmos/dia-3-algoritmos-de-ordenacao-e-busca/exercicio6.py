def find_first_bad_version(array):
    low_index = 0
    high_index = len(array) - 1
    while high_index >= low_index:
        middle_index = (high_index + low_index) // 2
        if not array[middle_index]:
            high_index = middle_index - 1
        else:
            low_index = middle_index + 1
    return low_index


print("Saída primeiro array:", find_first_bad_version(
    [True, True, True, True, False, False, False]))
print("Saída segundo array:", find_first_bad_version(
    [True, True, False, False, False, False, False]))
