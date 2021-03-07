<template>
  <div class="thumbnail__container">
    <img v-lazy="link" class="thumbnail" />
    <ul class="action">
      <li class="action__item">{{ $t('general.action.like') }}</li>
      <li class="action__item">{{ $t('general.action.edit') }}</li>
      <li class="action__item">{{ $t('general.action.remove') }}</li>
    </ul>
  </div>
</template>

<script>
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

  methods: {},
};
</script>
