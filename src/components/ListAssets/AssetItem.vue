<template>
  <div class="item__container">
    <div class="item__thumbnail">
      <ItemThumbnail />
    </div>
    <div class="item__info">
      Info asset
    </div>
  </div>
</template>

<script>
import { ItemThumbnail } from '@/components/ItemThumbnail';

export default {
  name: 'AssetItem',

  components: {
    ItemThumbnail,
  },

  data() {
    return {};
  },

  created() {},

  methods: {},
};
</script>
