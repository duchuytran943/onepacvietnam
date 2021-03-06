<template>
  <div class="list__container">
    <AssetItem v-for="item in items" :key="item.data[0].nasa_id" :item="item" />
  </div>
</template>

<script>
import AssetItem from './AssetItem.vue';

export default {
  props: {
    items: Array,
  },

  components: {
    AssetItem,
  },

  data() {
    return {};
  },

  created() {},

  methods: {},
};
</script>
