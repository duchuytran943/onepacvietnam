<template>
  <div class="thumbnail__container">
    <img v-lazy="link" class="thumbnail" />
    <ul class="action">
      <li class="action__item" @click="onClickLike()">
        {{ $t('general.action.like') }}
        <span v-if="item.data[0].like"> +1</span>
      </li>
      <li class="action__item">{{ $t('general.action.edit') }}</li>
      <li class="action__item">{{ $t('general.action.remove') }}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ItemThumbnail',

  props: {
    item: Object,
  },

  computed: {
    link() {
      const link = this.item.links.filter(l => l.rel === 'preview');
      return link[0].href;
    },
  },

  components: {},

  data() {
    return {};
  },

  created() {},

  methods: {
    ...mapActions('collection', ['updateAsset']),

    onClickLike() {
      const asset = { ...this.item };
      asset.data[0].like = !asset.data[0].like;
      this.updateAsset(asset);
    },
  },
};
</script>
