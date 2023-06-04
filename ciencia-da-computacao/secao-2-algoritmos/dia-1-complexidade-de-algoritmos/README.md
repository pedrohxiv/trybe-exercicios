# :pencil: Complexidade de Algoritmos



Os requisitos dos exercícios são:

## Exercício 1

Dado um array de números de tamanho `n`, escreva um algoritmo que retorna `true` se há no array um número duplicado e `false` caso contrário. Analise a solução abaixo e diga qual é a ordem de complexidade desse algoritmo para o melhor caso, pior caso e caso médio.

```
def contains_duplicate(numbers):
    numbers.sort()
    previous_number = 'not a number';
    for number in numbers:
        if(previous_number == number): return True
        previous_number = number

    return False
```

## 🚀 Exercício 2

Utilize o módulo `random` da linguagem Python para gerar um array com 100 números. Cada um deve ser a média de `n` números gerados aleatoriamente. Qual é a ordem de complexidade de tempo e de espaço deste programa?

## Exercício 3

Dado um array de doces candies e um valor inteiro extra_candies, onde o candies[i] representa o número de doces que a enésima criança possui. Para cada criança, verifique se há uma maneira de distribuir doces extras entre as crianças de forma que ela possa ter o maior número de doces entre elas. Observe que várias crianças podem ter o maior número de doces. Analise o código abaixo para o melhor, pior caso e caso médio. Faça a análise de complexidade de espaço também.

```
def kids_with_candies(candies, extra_candies):
    # parece que a solução percorre o array somente uma vez,
    # porém isto é feito duas vezes, uma no `max` e outra para
    # preencher a resposta
    max_candies = max(candies)
    return [candy + extra_candies >= max_candies for candy in candies]


# saída: [True, True, True, False, True]
print(kids_with_candies([2, 3, 5, 1, 3], 3))
```
