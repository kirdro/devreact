from django.shortcuts import get_object_or_404, render
from django.http import HttpResponseRedirect, HttpResponse
from django.core.urlresolvers import reverse
from django.views import generic
from django.utils import timezone
from django.views.decorators.csrf import csrf_exempt
import json
# from django.template import RequestContext, loader

from .models import Choice, Question

@csrf_exempt
def get_news(request):
    if request.method != 'POST':
        return HttpResponse('HTTP method must be POST only', content_type="text", status=403)

    if request.POST.get('new_type') is None:
        return HttpResponse('error input parameter - new_type', content_type="text", status=400)

    title = request.POST.get('new_type') + '_news'

    my_dict = {
        title: [
            {
                'title': 'title1',
                'content': 'content1'
            },
            {
                'title': 'title2',
                'content': 'content2'
            },
            {
                'title': 'title3',
                'content': 'content3'
            },
            {
                'title': 'title4',
                'content': 'content4'
            }
        ]
    }

    json_string = json.dumps(my_dict, indent=4)

    return HttpResponse(json_string, content_type="application/json", status=200)

# Create your views here.
class IndexView(generic.ListView):
    template_name = 'polls/index.html'
    context_object_name = 'latest_question_list'

    def get_queryset(self):
	    """
	    Return the last five published questions (not including those set to be
	    published in the future).
	    """
	    return Question.objects.filter(
	        pub_date__lte=timezone.now()
	    ).order_by('-pub_date')[:5]


class DetailView(generic.DetailView):
    model = Question
    template_name = 'polls/comments.html'


class ResultsView(generic.DetailView):
    model = Question
    template_name = 'polls/results.html'

def vote(request, question_id):
    p = get_object_or_404(Question, pk=question_id)
    try:
        selected_choice = p.choice_set.get(pk=request.POST['choice'])
    except (KeyError, Choice.DoesNotExist):
        # Redisplay the question voting form.
        return render(request, 'polls/detail.html', {
            'question': p,
            'error_message': "You didn't select a choice.",
        })
    else:
        selected_choice.votes += 1
        selected_choice.save()
        # Always return an HttpResponseRedirect after successfully dealing
        # with POST data. This prevents data from being posted twice if a
        # user hits the Back button.
        return HttpResponseRedirect(reverse('polls:results', args=(p.id,)))