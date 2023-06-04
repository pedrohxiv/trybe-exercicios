def higher_number(list):
    if len(list) == 1:
        return list[0]
    else:
        first = list[0]
        rest = list[1:]
        bigger_than_rest = higher_number(rest)
        if (first > bigger_than_rest):
            return first
        else:
            return bigger_than_rest
