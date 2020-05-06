  <template>
      <div>
      <a :href="short_url" target="_blank" class="list-group-item list-group-item-action flex-column align-items-start">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{{ short_url }}</h5>
        <small>3 days ago</small>
      </div>
      <small>{{ long_url }}</small>
     </a>
    </div>
  </template>

<script>
export default {
  name: 'singleurl',
  props: {
    msg: String,
    short_url: String,
    long_url: String
  }
}
</script>
