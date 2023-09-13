from abc import ABC, abstractmethod
from math import pi


class FiguraGeometrica(ABC):
    @abstractmethod
    def area(self):
        raise NotImplementedError

    @abstractmethod
    def perimetro(self):
        raise NotImplementedError


class Quadrado(FiguraGeometrica):
    def __init__(self, lado):
        self.__lado = lado

    def area(self):
        return self.__lado * self.__lado

    def perimetro(self):
        return self.__lado * 4


class Retangulo(FiguraGeometrica):
    def __init__(self, base, altura):
        self.__base = base
        self.__altura = altura

    def area(self):
        return self.__base * self.__altura

    def perimetro(self):
        return (self.__base + self.__altura) * 2


class Circulo(FiguraGeometrica):
    def __init__(self, raio):
        self.__raio = raio

    def area(self):
        return pi * self.__raio * self.__raio

    def perimetro(self):
        return 2 * pi * self.__raio
