def get_bigger_name(name_list):
    bigger_name = name_list[0]
    for name in name_list:
        if len(name) > len(bigger_name):
            bigger_name = name
    return bigger_name

print(get_bigger_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))