from app import db
import datetime
from flask.ext.mongoengine.wtf import model_form


class Todo(db.Document):
    content = db.StringField(required=True, max_length=20)
    time = db.StringField(default = datetime.datetime.strftime(datetime.datetime.now(), '%d-%m-%Y   %H:%M:%S'))
    status = db.IntField(default = 0)
    finishtime = db.StringField(default = datetime.datetime.now())
    classification = db.StringField(default = "工作")

    def to_json(self):
        return {
            'id':str(self.id),
            'content':self.content,
            'time':self.time,
            'status':self.status,
            'finishtime':self.finishtime,
            'classification':self.classification
        }

TodoForm = model_form(Todo)

