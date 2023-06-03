from fizzbuzz import fizzbuzz


def test_fizzbuzz_divisible_by_5_and_3_should_be_fizzbuzz():
    assert fizzbuzz(15)[-1] == 'FizzBuzz'


def test_fizzbuzz_divisible_by_5_should_be_buzz():
    assert fizzbuzz(5)[-1] == 'Buzz'


def test_fizzbuzz_divisible_by_3_should_be_fizz():
    assert fizzbuzz(5)[-1] == 'Fizz'


def test_fizzbuzz_should_return_list_of_numbers():
    assert fizzbuzz(2) == [1, 2]
