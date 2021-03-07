<template>
  <div class="viewtoggle__container">
    <ul class="viewtoggle">
      <li class="viewtoggle__item" :class="{ active: isViewAll }" @click="onSetViewALl()">
        <span>{{ $t('general.all') }}</span>
      </li>
      <li class="viewtoggle__item" :class="{ active: isViewLiked }" @click="onSetViewLiked()">
        <span>{{ $t('general.liked') }}</span>
      </li>
      <li class="viewtoggle__item" :class="{ active: isViewRemoved }" @click="onSetViewRemoved()">
        <span>{{ $t('general.removed') }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    viewToggle: String,
  },

  components: {},

  data() {
    return {};
  },

  computed: {
    isViewAll() {
      return this.viewToggle === this.$vConfig.VIEW_TOGGLE.ALL;
    },

    isViewLiked() {
      return this.viewToggle === this.$vConfig.VIEW_TOGGLE.LIKED;
    },

    isViewRemoved() {
      return this.viewToggle === this.$vConfig.VIEW_TOGGLE.REMOVED;
    },
  },

  created() {},

  methods: {
    onSetViewALl() {
      this.$emit('update:viewToggle', this.$vConfig.VIEW_TOGGLE.ALL);
    },

    onSetViewLiked() {
      this.$emit('update:viewToggle', this.$vConfig.VIEW_TOGGLE.LIKED);
    },

    onSetViewRemoved() {
      this.$emit('update:viewToggle', this.$vConfig.VIEW_TOGGLE.REMOVED);
    },
  },
};
</script>
