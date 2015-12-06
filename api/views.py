from django.shortcuts import render
from django.http import HttpResponse
from django.http import JsonResponse
from apitools import ApiResponse, GetParams
from django.views.decorators.csrf import csrf_exempt
import json

def hello(request):
    return HttpResponse('fff')

@csrf_exempt
def add_comment(request):
    
    params, error = GetParams(request, 'POST', ['item_id', 'author', 'comment'])
    if error:
        return error

    obj = {}
    try:
        f = open('comments.json')
        obj = json.loads(f.read())
    except:
        pass

    comments = obj.get(params.item_id, [])
    # comment_id = obj.get('count')
    comments.append({
        'author': params.author,
        'comment': params.comment
    })
    obj[params.item_id] = comments
    f = open('comments.json', 'w')
    f.write(json.dumps(obj))
    f.close()

    return ApiResponse({
        'status': 'saved'
    })

def comments(request):
    params, error = GetParams(request, 'GET', ['item_id',])
    if error:
        return error

    obj = {}
    try:
        f = open('comments.json')
        obj = json.loads(f.read())
    except:
        pass

    comments = obj.get(params.item_id, [])

    return ApiResponse({
        'comments': comments
    })
