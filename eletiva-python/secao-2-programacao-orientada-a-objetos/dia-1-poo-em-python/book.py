class Book:
    def __init__(self, title: str, author: str, pages: int) -> None:
        self.title = title
        self.author = author
        self.pages = pages

    def description(self) -> str:
        return f"{self.title}, de {self.author}, tem {self.pages} páginas."


book = Book("Dom Quixote", "Miguel de Cervantes", 863)

print(book.description())
