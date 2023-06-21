def substring(string):
    biggest = 0

    for i, _ in enumerate(string):
        substr = set()
        for letter in string[i:]:
            if letter in substr:
                break
            substr.add(letter)
        if len(substr) > biggest:
            biggest = len(substr)

    return biggest
# Complexidade O(n²)


string = "serdevemuitolegalmasehprecisoestudarbastante"

print('Longest substring length:', substring(string))
