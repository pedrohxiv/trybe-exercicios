from stack import Stack

garage = Stack()

option = 0

while option != 4:
    print('Operações: ')
    print('1. Inserção de veículo')
    print('2. Remoção do veículo')
    print('3. Veículos estacionados')
    print('4. Feche o programa')
    option = int(input('Opção: '))

    if option == 1:
        plate_number = input('Número da placa: ')
        garage.push(plate_number)
        print('Veículo de placa ' + plate_number + ' estacionado')
    elif option == 2:
        vehicle_plate = input('Número da placa: ')
        street = Stack()
        removed = False
        while not garage.is_empty():
            parked_plate = garage.pop()
            if parked_plate == vehicle_plate:
                print('eículo de placa ' + vehicle_plate + ' removido')
                removed = True
            else:
                street.push(parked_plate)

        while not street.is_empty():
            street_vehicle = street.pop()
            garage.push(street_vehicle)

        if not removed:
            print('Não há veículo estacionado com esta placa!')
    elif option == 3:
        print('Veículos estacionados: ' + str(garage))
    else:
        print('Fechando o programa')
        option = 4
# Complexidade O(n)
