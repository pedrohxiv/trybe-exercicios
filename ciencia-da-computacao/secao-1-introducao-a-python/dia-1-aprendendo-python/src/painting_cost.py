def painting_cost(wall):
    coverage_per_liter = 3
    can_capacity = 18
    can_price = 80
    quantity_paint = wall / coverage_per_liter
    quantity_can = int(quantity_paint / can_capacity)
    total_price  = quantity_can * can_price
    return quantity_can, total_price

print(painting_cost(1000))