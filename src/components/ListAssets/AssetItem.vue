<template>
  <div class="item__container">
    <div class="item__thumbnail">
      <ItemThumbnail />
    </div>
    <div class="item__info">
      <ItemInfo />
    </div>
  </div>
</template>

<script>
import ItemThumbnail from './ItemThumbnail.vue';
import ItemInfo from './ItemInfo.vue';

export default {
  name: 'AssetItem',

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
