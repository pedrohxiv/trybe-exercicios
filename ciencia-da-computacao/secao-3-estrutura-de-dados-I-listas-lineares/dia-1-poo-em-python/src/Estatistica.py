from collections import Counter


class Estatistica:
    def __init__(self, numbers):
        self.__numbers = numbers

    def media(self):
        return sum(self.__numbers) / len(self.__numbers)

    def mediana(self):
        numbers = sorted(self.__numbers)
        i = len(numbers) // 2
        if len(numbers % 2 == 0):
            return (numbers[i - 1] + numbers[i]) / 2
        return numbers[i]

    def moda(self):
        return Counter(self.__numbers).most_common()[0][0]
