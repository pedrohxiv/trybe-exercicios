from bson import ObjectId

from .db import db


class StudentModel:
    def __init__(self):
        self.collection = db['students']

    def create(self, data):
        result = self.collection.insert_one(data)
        return str(result.inserted_id)

    def read_all(self):
        return list(self.collection.find({}))

    def read_one(self, student_id):
        return self.collection.find_one({'_id': ObjectId(student_id)})

    def update(self, student_id, data):
        result = self.collection.update_one(
            {'_id': ObjectId(student_id)},
            {'$set': data},
        )
        return result.modified_count > 0

    def delete(self, student_id):
        result = self.collection.delete_one({'_id': ObjectId(student_id)})
        return result.deleted_count > 0
