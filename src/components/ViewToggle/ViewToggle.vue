<template>
  <div class="viewtoggle__container">
    <ul class="viewtoggle">
      <li class="viewtoggle__item active">
        <span>{{ $t('general.all') }}</span>
      </li>
      <li class="viewtoggle__item">
        <span>{{ $t('general.liked') }}</span>
      </li>
      <li class="viewtoggle__item">
        <span>{{ $t('general.removed') }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {};
  },

  created() {},

  methods: {},
};
</script>
