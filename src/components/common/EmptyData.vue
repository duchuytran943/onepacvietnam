<template>
  <div class="content__empty">
    <h2 v-if="!isLoading">{{ $t('general.dataEmpty') }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: Boolean,
  },
};
</script>
