def calculate_amount_paid(liters, fuel_type):
    gasoline_price = 2.50
    alcohol_price = 1.90
    if fuel_type == 'G':
        if liters <= 20:
            discount_value = liters * (gasoline_price * 0.04)
        else:
            discount_value = liters * (gasoline_price * 0.06)
        total_value = liters * gasoline_price - discount_value
    elif fuel_type == 'A':
        if liters <= 20:
            discount_value = liters * (alcohol_price * 0.03)
        else:
            discount_value = liters * (alcohol_price * 0.05)
        total_value = liters * alcohol_price - discount_value
    else:
        return "Tipo de combustível inválido"
    return total_value

print(calculate_amount_paid(20, 'G'))