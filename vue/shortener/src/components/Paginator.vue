<template>
  <div>
    <nav style="margin-top: 10;">
      <ul class="pagination">
        <li :class="prevClass()">
          <a class="page-link" href="#" @click="prevPage()">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>

        <li
          v-for="i in this.number_of_pages"
          :key="i"
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
      <singleurl
        v-for="url in pageDataList()"
        :key="url.id"
        :short_url="url.short_url"
        :long_url="url.url"
      ></singleurl>
    </div>
  </div>
</template>

<script>
import singleurl from './SingleUrl.vue'

export default {
  name: 'paginator',
  props: ['datalist', 'count_per_page'],
  components: {
    singleurl
  },
  data: function () {
    return {
      current_page: 1
    }
  },
  computed: {
    size: function () {
      return this.datalist.length
    },
    number_of_pages: function () {
      return Math.ceil(this.datalist.length / this.count_per_page)
    },
  },
  methods: {
    nextPage () {
      this.current_page++
    },
    prevPage () {
      this.current_page--
    },
    nextClass () {
      let classname = 'page-item'
      if (this.current_page >= this.number_of_pages) {
        classname += ' disabled'
      }
      return classname
    },
    prevClass () {
      let classname = 'page-item'
      if (this.current_page <= 1) {
        classname += ' disabled'
      }
      return classname
    },
    pageClass (pageNumber) {
      let classname = 'page-item'
      if (this.current_page === pageNumber) {
        classname += ' active'
      }
      return classname
    },
    pageDataList () {
      const start = 0 + (this.current_page - 1) * this.count_per_page
      let end = this.count_per_page + (this.current_page - 1) * this.count_per_page
      if (end > this.size) {
        end = this.size
      }
      return this.datalist.slice(start, end)
    },
    numberPageClick (pageNumber) {
      this.current_page = pageNumber
    }
  }
}
</script>
