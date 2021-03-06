<template>
  <div class="thumbnail__container">
    <img v-lazy="'https://images.viblo.asia/60x60/45b54e5c-f950-47c1-bce8-3b733d03d1db.jpg'" class="thumbnail" />
    <ul class="action">
      <li class="action__item">{{ $t('general.action.like') }} +1</li>
      <li class="action__item">{{ $t('general.action.edit') }}</li>
      <li class="action__item">{{ $t('general.action.remove') }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ItemThumbnail',

  components: {},

  data() {
    return {};
  },

  created() {},

  methods: {},
};
</script>
