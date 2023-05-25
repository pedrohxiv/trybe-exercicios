def arithmetic_average(number_list):
    total = 0
    for number in number_list:
        total += number
    return total / len(number_list)

print(arithmetic_average([2, 5, 8, 10]))