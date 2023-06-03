def fizzbuzz(number):
    numbers = []
    for n in range(1, number + 1):
        if n % 15 == 0:
            numbers.append('FizzBuzz')
        elif n % 5 == 0:
            numbers.append('Buzz')
        elif n % 3 == 0:
            numbers.append('Fizz')
        else:
            numbers.append(n)
    return numbers
