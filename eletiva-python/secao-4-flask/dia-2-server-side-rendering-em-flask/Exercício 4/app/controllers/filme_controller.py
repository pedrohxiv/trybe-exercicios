from models.filme import Filme


class FilmeController:
    def buscar_filmes_por_titulo(self, titulo=None):
        filme = Filme()
        return filme.buscar_filmes_por_titulo(titulo)

    def buscar_filme_por_id(self, id):
        filme = Filme()
        return filme.buscar_filme_por_id(id)
