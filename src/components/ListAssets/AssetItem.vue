<template>
  <div class="item__container">
    <div class="item__thumbnail">
      <ItemThumbnail :item="item" />
    </div>
    <div class="item__info">
      <ItemInfo :item="item" />
    </div>
  </div>
</template>

<script>
import ItemThumbnail from './ItemThumbnail.vue';
import ItemInfo from './ItemInfo.vue';

export default {
  name: 'AssetItem',

  props: {
    item: Object,
  },

  components: {
    ItemThumbnail,
    ItemInfo,
  },

  data() {
    return {};
  },

  created() {},

  methods: {},
};
</script>
