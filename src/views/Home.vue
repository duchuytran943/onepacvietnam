<template>
  <div class="home">
    <h1>This is home page</h1>
    <div>
      <div>
        <Foo></Foo>
      </div>
      <hr />
      <div>
        <Bar></Bar>
      </div>
    </div>
    <div>{{ collection }}</div>
  </div>
</template>

<script>
import httpAxios from '@/httpAxios';
import Foo from '@/components/Foo.vue';
import Bar from '@/components/Bar.vue';

export default {
  name: 'Home',

  components: {
    Foo,
    Bar,
  },

  data() {
    return {
      collection: [],
    };
  },

  created() {
    this.callApi();
  },

  methods: {
    callApi() {
      httpAxios({
        url: `${this.$backendUrl}/search?q=test`,
        method: 'GET',
      })
        .then(response => {
          console.log('response', response);
          this.collection = response;
        })
        .catch(error => {
          console.log('error', error);
        });
    },
  },
};
</script>
