def get_smaller_number(number_list):
    smaller_number = number_list[0]
    for number in number_list:
        if number < smaller_number:
            smaller_number = number
    return smaller_number

print(get_smaller_number([5, 9, 3, 19, 70, 8, 100, 2, 35, 27]))