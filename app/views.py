from app import app
from flask import render_template,request,jsonify
from app.models import Todo,TodoForm
from datetime import datetime
from mongoengine import *
import re

@app.route('/')
def index():
    #没有react之前的
    #form = TodoForm()
    #todos = Todo.objects.order_by('-time')
    #return render_template("index.html", todos=todos, form=form)
    return render_template("index.html")

@app.route('/todoNow')
def todoNow():
    return render_template("todoNow.html")

@app.route('/todoHistory')
def todoHistory():
    return render_template("todoHistory.html")

@app.route('/todoCharts')
def todoCharts():
    return render_template("todoCharts.html")

@app.route('/done/<string:todo_id>')
def done(todo_id):
    form = TodoForm()
    todo = Todo.objects.get_or_404(id=todo_id)
    todo.status = 1
    todo.save()
    todos = Todo.objects.order_by('-time')
    return render_template("index.html", todos=todos, form=form)

@app.route('/undone/<string:todo_id>')
def undone(todo_id):
    form = TodoForm()
    todo = Todo.objects.get_or_404(id=todo_id)
    todo.status = 0
    todo.save()
    todos = Todo.objects.order_by('-time')
    return render_template("index.html", todos=todos, form=form)

@app.route('/add', methods = ['POST', ])
def add():
    #不带验证的版本
    #form = request.form
    #content = form['content']
    #todo = Todo(content=content)
    #todo.save()
    #带验证的版本
    #form = TodoForm(request.form)
    #if form.validate():
    #    content = form.content.data
    #    todo = Todo(content=content, time=datetime.now())
    #    todo.save()
    #todos = Todo.objects.order_by('-time')
    #return render_template('index.html', todos=todos,form=form)
    #react的版本
    form = request.form
    content = form.get('content')
    finishtime = form.get('finishtime')
    classification = form.get('classification')
    todo = Todo(content=content, time=datetime.strftime(datetime.now(), '%d-%m-%Y   %H:%M:%S'), finishtime=finishtime, classification=classification)
    todo.save()
    return jsonify(status="success")

@app.route('/delete/<string:todo_id>')
def delete(todo_id):
    #不带react的版本
    #form = TodoForm()
    #todo = Todo.objects.get_or_404(id=todo_id)
    #todo.delete()
    #todos = Todo.objects.order_by('-time')
    #return render_template('index.html', todos=todos,form=form)
    #带react的版本
    todo = Todo.objects.get_or_404(id=todo_id)
    todo.delete()
    return jsonify(status="success")


@app.route('/update', methods = ['POST', ])
def update():
    #加入react后，原有的done和undone方法
    form = request.form
    todo_id = form.get('id')
    status = form.get('status')
    todo = Todo.objects.get_or_404(id=todo_id)
    todo.status = status
    todo.save()
    return jsonify(status="success")

@app.route('/list')
def list():
    #加入react后，用来返回所有项的方法
    todos = Todo.objects.order_by('-time')
    return jsonify(status="success", todos=[todo.to_json() for todo in todos])

@app.route('/query/<string:todo_content>')
def query(todo_content):
    search = {
            'content':re.compile(todo_content)
    }
    todos = Todo.objects(**search).order_by('-time')
    return jsonify(status="success", todos=[todo.to_json() for todo in todos])

@app.route('/queryBars/<string:todo_date>')
def queryBars(todo_date):
    search = {
        'time': re.compile(todo_date)
    }
    todos = Todo.objects(**search)
    dones=[]
    undones=[]
    for i in range(1,13):
        count_done = 0
        count_undone = 0
        for todo in todos:
            date = todo.time
            date_split = date.split('-')
            month = int(date_split[1])
            if(month==i and todo.status==1):
                count_done = count_done+1
            elif(month==i and todo.status==0):
                count_undone = count_undone+1
        dones.append(count_done)
        undones.append(count_undone)
        count_done = 0
        count_undone = 0
    return jsonify(status="success", done=dones, undone=undones)


@app.route('/queryPies/<string:todo_date>')
def queryPies(todo_date):
    date = todo_date.split('-')
    year = date[0]
    month = int(date[1])
    datas=[
            ['工作',0],
             ['人情',0],
             {
                'name': '娱乐',
                'y':0,
                'sliced': 'true',
                'selected': 'true'
             },
             ['教育',0],
             ['日杂',0],
            ]
    data_count=[0,0,0,0,0]
    sum=0
    search = {
        'time': re.compile(year)
    }
    todos = Todo.objects(**search)
    for todo in todos:
        date = todo.time
        date_split = date.split('-')
        todo_month = int(date_split[1])
        if(todo_month==month and todo.classification=="工作"):
            data_count[0] = data_count[0]+1
        elif(todo_month==month and todo.classification=="人情"):
            data_count[1] = data_count[1]+1
        elif (todo_month == month and todo.classification == "娱乐"):
            data_count[2] = data_count[2]+1
        elif (todo_month == month and todo.classification == "教育"):
            data_count[3] = data_count[3]+1
        elif (todo_month == month and todo.classification == "日杂"):
            data_count[4] = data_count[4]+1
    for i in range(5):
        sum = sum+data_count[i]
    if(sum!=0):
        datas[0][1] = data_count[0]/sum
        datas[1][1] = data_count[1]/sum
        datas[2]['y'] = data_count[2]/sum
        datas[3][1] = data_count[3]/sum
        datas[4][1] = data_count[4]/sum
    return jsonify(status="success", data=datas)

@app.errorhandler(404)
def not_found(error):
    return render_template('404.html')
