from bson import ObjectId

from .db import db


class Filme:
    def __init__(self):
        self.collection = db['filmes']

    def buscar_filmes_por_titulo(self, titulo=None):
        if titulo:
            return list(self.collection.find({"titulo": titulo}))
        else:
            return list(self.collection.find())

    def buscar_filme_por_id(self, id):
        return self.collection.find_one({'_id': ObjectId(id)})

    def to_dict(self):
        return {
            "titulo": self.titulo,
            "ano": self.ano,
            "diretor": self.diretor,
            "genero": self.genero,
            "poster": self.poster,
            "_id": str(self._id),
        }
