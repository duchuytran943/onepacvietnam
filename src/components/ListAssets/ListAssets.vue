<template>
  <div class="list__container">
    <AssetItem v-for="(item, index) in items" :key="index" :item="item" />
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
