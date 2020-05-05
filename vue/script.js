Vue.component('paginator', {
    props: ['datalist', 'count_per_page'],
    data: function() {
        return {
            size: this.datalist.length,
            number_of_pages: Math.ceil(
                this.datalist.length / this.count_per_page),
            current_page: 1,
        }
    },
    methods: {
        nextPage(){
            this.current_page++;
        },
        prevPage(){
            this.current_page--;
        },
        nextClass(){
            class_name = "page-item";
            if (this.current_page >= this.number_of_pages){
                class_name += " disabled"
            }
            return class_name
        },
        prevClass(){
            class_name = "page-item";
            if (this.current_page <= 1){
                class_name += " disabled"
            }
            return class_name
        },
        pageClass(page_number){
            class_name = "page-item";
            if (this.current_page == page_number){
                class_name += " active"
            }
            return class_name
        },
        pageDataList(){
            start = 0 + (this.current_page-1)*this.count_per_page;
            end = this.count_per_page + (this.current_page-1)*this.count_per_page;
            if (end > this.size){
                end = this.size;
            }
            return this.datalist.slice(start, end);
        },
        numberPageClick(page_number){
            this.current_page = page_number;
        }
    },

    template:
    `
    <div>
    <nav style="margin-top: 10;">
    <ul class="pagination">
      <li :class="prevClass()">
        <a class="page-link" href="#" @click="prevPage()">
          <span aria-hidden="true">&laquo;</span>
          <span class="sr-only">Previous</span>
        </a>
      </li>

      <li v-for="i in this.number_of_pages" 
            :class="pageClass(i)"
            @click="numberPageClick(i)"
          >
        <a class="page-link" href="#" :id="i">{{ i }}</a>
      </li>

      <li :class="nextClass()">
        <a class="page-link" href="#" @click="nextPage()">
          <span aria-hidden="true">&raquo;</span>
          <span class="sr-only">Next</span>
        </a>
      </li>
    </ul>
    </nav>

    <div class="list-group">
        <single_url v-for="url in pageDataList()"
            :key="url.id"
            :short_url="url.short_url"
            :long_url="url.url"
        ></single_url>
    </div>
    </div>
    `,
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
    count_per_page: 3,
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
    {
        "url": "asdasdhttps://app.slack.com/client/T02HV422M/C02HV4235/thread/C02HV4235-1580982888.142900",
        "short_url": "http://0.0.0.0:8000/QW-HOI"
    }, 

    {
        "url": "zxczxchttps://www.django-rest-framework.org/tutorial/2-requests-and-responses/#status-codes",
        "short_url": "http://0.0.0.0:8000/1gzRMI"
    },
    {
        "url": "qwewehttps://stackoverrun.com/ru/q/8064923",
        "short_url": "http://0.0.0.0:8000/FzjFxI"
    },
    {
        "url": "dfgdfghttps://app.slack.com/client/T02HV422M/C02HV4235/thread/C02HV4235-1580982888.142900",
        "short_url": "http://0.0.0.0:8000/QW-HOI"
    },
    {
        "url": "xcvhttps://app.slack.com/client/T02HV422M/C02HV4235/thread/C02HV4235-1580982888.142900",
        "short_url": "http://0.0.0.0:8000/QW-HOI"
    },
    {
        "url": "zxvchttps://app.slack.com/client/T02HV422M/C02HV4235/thread/C02HV4235-1580982888.142900",
        "short_url": "http://0.0.0.0:8000/QW-HOI"
    }, 
    
    ],
},
});


