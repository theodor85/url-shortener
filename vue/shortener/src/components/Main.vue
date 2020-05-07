<template>
  <div id="app">
    <div class="container">
      <div class="move-top">
        <form>
          <div class="form-group">
            <label for="inputUrl">Длинный URL:</label>
            <input
              type="text"
              class="form-control"
              id="inputUrl"
              placeholder="Введите ваш длинный URL"
            />
          </div>
          <label for="shortUrl">Короткий URL:</label>
          <div class="form-group row">
            <label for="shortUrl" class="col-sm-2 col-form-label">http://domen/</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" id="shortUrl" placeholder="Короткий URL" />
            </div>
          </div>
        </form>
      </div>

      <div class="move-top">
        <hr />
        <label>Ваши URL-ы:</label>
        <paginator :datalist="urls" :count_per_page="parseInt(count_per_page)"></paginator>
      </div>
      <form>
        <div class="form-group row move-top" style="margin-top: 10;">
          <label
            for="count_per_page"
            class="col-sm-2 col-form-label"
          >Количество элементов на странице:</label>
          <div class="col-sm-5">
            <input type="number" class="form-control" v-model.lazy="count_per_page" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import paginator from './Paginator.vue'
import axios from 'axios'

export default {
  name: 'maincomponent',
  components: {
    paginator
  },
  created () {
    axios
      .get('http://0.0.0.0:8000/')
      .then(response => {
        this.urls = response.data;
        console.log(this.urls);
      })
      .catch(error => console.log(error));
  },
  data: function () {
    return {
      pageNumber: 0,
      count_per_page: 3,
      urls: [],
    }
  }
}
</script>
<style>
.move-top {
  margin-top: 50px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
