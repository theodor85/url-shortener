Vue.component('paginator', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
});

Vue.component('single_url', {
    props: ['short_url', 'long_url'],
    template: `
    <div>
    <a :href="short_url" target="_blank" class="list-group-item list-group-item-action flex-column align-items-start">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ short_url }}</h5>
        <small>3 days ago</small>
      </div>
      <small>{{ long_url }}</small>
     </a>
    </div>
    `
  });


var APP_LOG_LIFECYCLE_EVENTS = false;
var webstore = new Vue({
el: '#app',
data: {
    pageNumber: 0,
    methods:{
        nextPage(){
            this.pageNumber++;
        },
        prevPage(){
            this.pageNumber--;
        }
    },
    computed: {
        pageCount(){
            let l = this.listData.length,
            s = this.size;
            return Math.ceil(l/s);
        },
        paginatedData(){
            const start = this.pageNumber * this.size,
            end = start + this.size;
            return this.urls.slice(start, end);
        },
        size(){
            return this.urls.length();
        },
    },

    urls: [
    {
        "url": "https://www.django-rest-framework.org/tutorial/2-requests-and-responses/#status-codes",
        "short_url": "http://0.0.0.0:8000/1gzRMI"
    },
    {
        "url": "https://stackoverrun.com/ru/q/8064923",
        "short_url": "http://0.0.0.0:8000/FzjFxI"
    },
    {
        "url": "https://app.slack.com/client/T02HV422M/C02HV4235/thread/C02HV4235-1580982888.142900",
        "short_url": "http://0.0.0.0:8000/QW-HOI"
    },
    {
        "url": "https://app.slack.com/client/T02HV422M/C02HV4235/thread/C02HV4235-1580982888.142900",
        "short_url": "http://0.0.0.0:8000/QW-HOI"
    },
    
    ],
},
});


