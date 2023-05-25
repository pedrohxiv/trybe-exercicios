def type_of_triangle(a, b, c):
    if a + b > c and a + c > b and b + c > a:
        if a == b == c:
            return 'Triângulo Equilátero'
        elif a == b or a == c or b == c:
            return 'Triângulo Isósceles'
        else:
            return 'Triângulo Escaleno'
    else:
        return 'Não é triângulo'
    
print(type_of_triangle(4, 6, 9))