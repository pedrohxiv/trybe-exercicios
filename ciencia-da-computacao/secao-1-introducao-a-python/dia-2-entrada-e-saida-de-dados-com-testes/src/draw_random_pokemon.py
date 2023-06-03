import json
import random


def draw_random_pokemon(pokemon):
    wrong_shot = True
    num_of_shots = 0
    while (wrong_shot):
        num_of_shots += 1
        shot = input("Quem é esse pokemon? ")
        if (shot == pokemon):
            print("Você acertou! Parabéns!")
            break
        elif num_of_shots == len(pokemon):
            print("Você errou!")
            break
        else:
            print("Dica: ", end="")
            for i in range(0, num_of_shots):
                print(pokemon[i], end="")
            print("")


if __name__ == "__main__":
    with open("src/pokemons.json") as file:
        draw_random_pokemon(random.choice(json.load(file)["results"])["name"])
