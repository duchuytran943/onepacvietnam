<template>
  <div class="sort-bar__container">
    <span class="text">Sort:</span>
    <ul class="action">
      <li class="action__item" :class="{ active: isNewest }" @click="onSortNewest()">
        {{ $t('general.sort.newest') }}
      </li>
      <li class="action__item" :class="{ active: isOldest }" @click="onSortOldest()">
        {{ $t('general.sort.oldest') }}
      </li>
      <li class="action__item" :class="{ active: isAToZ }" @click="onSortAToZ()">
        {{ $t('general.sort.aToZ') }}
      </li>
      <li class="action__item" :class="{ active: isZToA }" @click="onSortZToA()">
        {{ $t('general.sort.zToA') }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    sort: String,
  },

  computed: {
    isNewest() {
      return this.sort === this.$vConfig.SORT.NEWEST;
    },

    isOldest() {
      return this.sort === this.$vConfig.SORT.OLDEST;
    },

    isAToZ() {
      return this.sort === this.$vConfig.SORT.ATOZ;
    },

    isZToA() {
      return this.sort === this.$vConfig.SORT.ZTOA;
    },
  },

  methods: {
    onSortNewest() {
      this.$emit('update:sort', this.$vConfig.SORT.NEWEST);
    },

    onSortOldest() {
      this.$emit('update:sort', this.$vConfig.SORT.OLDEST);
    },

    onSortAToZ() {
      this.$emit('update:sort', this.$vConfig.SORT.ATOZ);
    },

    onSortZToA() {
      this.$emit('update:sort', this.$vConfig.SORT.ZTOA);
    },
  },
};
</script>
