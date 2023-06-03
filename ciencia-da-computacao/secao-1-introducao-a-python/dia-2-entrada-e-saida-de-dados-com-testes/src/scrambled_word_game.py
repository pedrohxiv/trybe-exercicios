import random


def scrambled_word_game(words):
    random_word = random.choice(words)
    scrambled_word = "".join(random.sample(random_word, len(random_word)))
    attempts = 3

    print("Jogo da Palavra Embaralhada!")
    print("Adivinhe a palavra embaralhada. Você tem 3 tentativas.")

    while attempts > 0:
        print("Palavra embaralhada:", scrambled_word)
        guess = input("Digite sua resposta: ")

        if guess.lower() == random_word.lower():
            print("Parabéns! Você acertou a palavra.")
            return

        attempts -= 1
        if attempts > 0:
            print("Resposta incorreta. Tente novamente.\n")

    print("Você perdeu! A palavra correta era:", random_word)


if __name__ == "__main__":
    with open('src/words.txt') as file:
        scrambled_word_game([word.strip() for word in file.readlines()])
