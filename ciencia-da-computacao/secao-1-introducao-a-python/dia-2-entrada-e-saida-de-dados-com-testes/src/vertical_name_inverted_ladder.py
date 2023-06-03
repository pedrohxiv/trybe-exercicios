def vertical_name_inverted_ladder(name):
    for removed_letter in range(len(name)):
        for index in range(len(name) - removed_letter):
            print(name[index], end='')
        print()


if __name__ == '__main__':
    name = input('Digite um nome: ')
    vertical_name_inverted_ladder(name)
