from typing import List


def string_filter(string_list: List[str], char: str) -> List[str]:
    result = []

    for word in string_list:
        if word.startswith(char):
            result.append(word)

    return result


print(string_filter(["cachorro", "gato", "elefante", "girafa"], "g"))
