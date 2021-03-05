<template>
  <div class="search__container">
    <div class="search">
      <input v-model="keyword" type="text" class="search__input" :placeholder="$t('general.searchEverthing')" />
      <span v-if="isShowSearchIcon" class="search__icon">
        <SearchIcon />
      </span>
      <span v-else class="search__icon" @click="removeKeyword()">
        <RemoveIcon />
      </span>
    </div>
  </div>
</template>

<script>
import { SearchIcon, RemoveIcon } from '@/components/common/icons';

export default {
  components: {
    SearchIcon,
    RemoveIcon,
  },

  data() {
    return {
      isShowSearchIcon: true,
      keyword: '',
    };
  },

  created() {},

  watch: {
    keyword() {
      this.isShowSearchIcon = this.keyword.trim() === '';
      console.log(this.keyword);
    },
  },

  methods: {
    removeKeyword() {
      this.keyword = '';
    },
  },
};
</script>
