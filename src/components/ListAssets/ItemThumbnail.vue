<template>
  <div class="thumbnail__container">
    <img src="@/assets/images/v.jpg" class="thumbnail" />
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
