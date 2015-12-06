from django.http import HttpResponse
import json


def ApiResponse(value, status=200):
    strResult = json.dumps(value, indent=4)
    return HttpResponse(strResult, content_type="application/json", status=status)

def GetParams(request, method, params_names, optional_params_names=[]):
    if request.method!=method:
        return ApiResponse({
            'status': 'HTTP method must be %s' % method
        }, 400)

    class Params():
        pass
    params = Params()
    err = None
    for name in params_names:
        print params_names
        value = eval('request.%s' % method).get(name)
        if value is None:
            err = ApiResponse({
                'status': 'error input parameter %s' % name
            }, 403)
        setattr(params, name, value)
    for name in optional_params_names:
        value = eval('request.%s' % method).get(name)
        setattr(params, name, value)
    return params, err